from rest_framework import serializers
from accounts.serializers import UserSerializer,CustomUserSerializer
from .models import Bwit, LikeBwit


class BwitSerializerTwo(serializers.ModelSerializer):
    body = serializers.CharField(max_length=20)
    picture = serializers.FileField()
    created_at = serializers.DateTimeField()
    author = UserSerializer(read_only=True)
    # bwit_likes = LikeBwitSerializer(read_only=True)

    class Meta:
        model = Bwit
        fields = (
            'body',
            'picture',
            'created_at',
            'author',
            # 'bwit_likes',
        )


class LikeBwitSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    bwit = BwitSerializerTwo(read_only=True)

    class Meta:
        model = LikeBwit
        # fields = ['user']
        fields = '__all__'


class BwitSerializer(serializers.ModelSerializer):
    body = serializers.CharField(max_length=20)
    picture = serializers.FileField()
    created_at = serializers.DateTimeField()
    author = UserSerializer(read_only=True)
    bwit_likes = LikeBwitSerializer(read_only=True, many=True)

    class Meta:
        model = Bwit
        fields = (
            'body',
            'picture',
            'created_at',
            'author',
            'bwit_likes',
        )


