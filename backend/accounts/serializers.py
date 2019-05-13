from rest_framework import serializers

from django.utils import timezone

from django.contrib.auth.hashers import make_password
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import CustomUser, Connection, Bwit

from django.core import exceptions
import django.contrib.auth.password_validation as validators

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id',
            'nickname',
            'profile_pic',
            'joined_at',
            'status',
        )
        extra_kwargs = {'profile_pic': {'required': True}}


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(validators=[], required=True)

    password = serializers.CharField(
        min_length=8, write_only=True, required=True)

    nickname = serializers.CharField(
        min_length=3, source="custom_user.nickname", required=False)
    profile_pic = serializers.FileField(
        allow_null=False, source="custom_user.profile_pic", required=False)

    joined_at = serializers.DateTimeField(
        source="custom_user.joined_at", required=False)
    status = serializers.CharField(source="custom_user.status", required=False)
    id = serializers.IntegerField(read_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            password=make_password(validated_data['password']))

        if 'custom_user' in validated_data:
            CustomUser.objects.create(
                user=user,
                nickname=validated_data['custom_user'].get('nickname', ''),
                profile_pic=validated_data['custom_user'].get(
                    'profile_pic', None),
                joined_at=validated_data['custom_user'].get('joined_at', None),
                status=validated_data['custom_user'].get('status', ''))

        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        print(instance.password)
        if 'password' in validated_data:
            instance.password = make_password(validated_data['password'])

        if 'custom_user' in validated_data:
            instance.custom_user.nickname = validated_data['custom_user'].get(
                'nickname', instance.custom_user.nickname)
            instance.custom_user.profile_pic = validated_data[
                'custom_user'].get('profile_pic',
                                   instance.custom_user.profile_pic)
            instance.custom_user.status = validated_data['custom_user'].get(
                'status', instance.custom_user.status)
            instance.custom_user.joined_at = validated_data['custom_user'].get(
                'nickname', instance.custom_user.joined_at)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'password',
            'nickname',
            'profile_pic',
            'joined_at',
            'status',
        )


class BwitSerializer(serializers.ModelSerializer):
    body = serializers.CharField(max_length=40)
    picture = serializers.FileField()
    created_at = serializers.DateTimeField()
    author = CustomUserSerializer(read_only=True)

    class Meta:
        model = Bwit
        fields = (
            'body',
            'picture',
            'created_at',
            'author',
        )
