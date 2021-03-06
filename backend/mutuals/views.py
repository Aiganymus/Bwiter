from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from accounts.serializers import UserSerializer
from .serializers import  ConnectionSerializer
from django.contrib.auth.models import User
from .models import Connection

# Create your views here.
@api_view(['DELETE', 'POST'])
def create_or_delete_connection(request, pk):
    if request.method == 'POST':
        print(pk, request.user.id)
        # user = User.objects.get(pk=pk)
        serializer = ConnectionSerializer(data={
            'followed': pk,
            'following_id': request.user.id
        })
        print(serializer.is_valid())
        if serializer.is_valid():
            print(serializer.validated_data)
            serializer.save()
            # print(serializer.data)
            return Response(serializer.data)
    elif request.method == 'DELETE':
        connection = Connection.objects.get(
            followed=pk, following=request.user.id)
        connection.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_followers(request, pk):
    followed = User.objects.get(pk=pk)
    followers = [
        connection.following
        for connection in Connection.objects.filter(followed=followed)
    ]
    serialized = UserSerializer(followers, many=True)
    print(serialized.data)
    return Response(serialized.data)


@api_view(['GET'])
def get_following(request, pk):
    following = User.objects.get(pk=pk)
    followed = [
        connection.followed
        for connection in Connection.objects.filter(following=following)
    ]
    serialized = UserSerializer(followed, many=True)
    print(serialized.data)
    return Response(serialized.data)
