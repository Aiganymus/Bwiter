from rest_framework import serializers
from accounts.serializers import UserSerializer, CustomUserSerializer
from .models import Bwit, LikeBwit
from comments.serializers import CommentSerializer


class BwitSerializerTwo(serializers.ModelSerializer):
    body = serializers.CharField(max_length=20)
    picture = serializers.FileField(required=False)
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


class BwitSerializerTwo(serializers.ModelSerializer):
    body = serializers.CharField(max_length=20)
    picture = serializers.FileField()

    # created_at = serializers.DateTimeField()
    # author = UserSerializer(read_only=True)

    class Meta:
        model = Bwit
        fields = (
            'body',
            'picture',
            # 'created_at',
            # 'author',
        )


# class LikeBwitSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)
#     bwit = BwitSerializerTwo(read_only=True)
#
#     class Meta:
#         model = LikeBwit
#         # fields = ['user']
#         fields = '__all__'


class LikeBwitSerializer(serializers.Serializer):
    user = UserSerializer(read_only=True)
    bwit = BwitSerializerTwo(read_only=True)

    def create(self, validated_data):
        like_bwit = LikeBwit(**validated_data)
        like_bwit.save()
        return like_bwit


class BwitSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)
    body = serializers.CharField(max_length=20)
    picture = serializers.FileField()
    created_at = serializers.DateTimeField()
    author = UserSerializer(read_only=True)
    bwit_likes = LikeBwitSerializer(read_only=True, many=True)
    bwit_comments = CommentSerializer(read_only=True, many=True)

    class Meta:
        model = Bwit
        fields = (
            'id',
            'body',
            'picture',
            'created_at',
            'author',
            'bwit_likes',
            'bwit_comments',
        )
