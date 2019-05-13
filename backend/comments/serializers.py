from rest_framework import serializers
from accounts.serializers import CustomUserSerializer
from bwits.serializers import BwitSerializer
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    body = serializers.CharField(max_length=21)
    author = CustomUserSerializer(read_only=True)
    bwit = BwitSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = (
            'body',
            'author',
            'bwit',
        )
