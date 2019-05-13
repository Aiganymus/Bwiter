from .models import Connection
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class ConnectionSerializer(serializers.ModelSerializer):
    def already_following(value):
        if Connection.objects.filter(following=value).exists():
            raise serializers.ValidationError('Already following')

    followed = serializers.IntegerField(
        required=True, validators=[already_following])

    class Meta:
        model = Connection
        fields = ('followed', 'following', 'created')
        read_only_fields = 'created',



