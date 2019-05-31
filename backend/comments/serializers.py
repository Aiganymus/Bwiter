from rest_framework import serializers
from accounts.serializers import CustomUserSerializer, UserSerializer
from .models import Comment
from bwits.models import Bwit


class BwitSerializerOne(serializers.ModelSerializer):
    body = serializers.CharField(max_length=20)
    picture = serializers.FileField()
    created_at = serializers.DateTimeField()
    author = UserSerializer(read_only=True)

    class Meta:
        model = Bwit
        fields = (
            'body',
            'picture',
            'created_at',
            'author',
        )


# class CommentSerializer(serializers.ModelSerializer):
#     body = serializers.CharField(max_length=21)
#     author = UserSerializer(read_only=True)
#     bwit = BwitSerializerOne(read_only=True)
#
#     class Meta:
#         model = Comment
#         fields = '__all__'


class CommentSerializer(serializers.Serializer):
    body = serializers.CharField(max_length=21)
    author = UserSerializer(read_only=True)
    bwit = BwitSerializerOne(read_only=True)

    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment
