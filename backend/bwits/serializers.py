from rest_framework import serializers
from accounts.serializers import CustomUserSerializer
from .models import Bwit, LikeBwit


class BwitSerializer(serializers.ModelSerializer):
    body = serializers.CharField(max_length=20)
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


class LikeBwitSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    bwit = BwitSerializer(read_only=True)

    class Meta:
        model = LikeBwit
        fields = "__all__"
