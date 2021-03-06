from .models import Connection
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class ConnectionSerializer(serializers.ModelSerializer):
    def already_following(value):
        if Connection.objects.filter(following_id=value).exists():
            raise serializers.ValidationError('Already following')

    following_id = serializers.IntegerField(
        required=True)

    class Meta:
        model = Connection
        fields = ('followed', 'following_id', 'created')
        read_only_fields = 'created',

