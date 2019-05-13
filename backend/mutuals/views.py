from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend.accounts.serializers import UserSerializer
from .serializers import  ConnectionSerializer
from django.contrib.auth.models import User
from .models import Connection

# Create your views here.
@api_view(['DELETE', 'POST'])
def create_or_delete_connection(request, pk):
    if request.method == 'POST':
        serializer = ConnectionSerializer({
            'followed': f'{pk}',
            'following': f'{request.id}'
        })
        if serializer.is_valid():
            serializer.save()
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
