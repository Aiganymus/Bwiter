from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomUserSerializer, UserSerializer, ConnectionSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.parsers import FileUploadParser, JSONParser, FormParser, MultiPartParser
from .models import CustomUser, Connection, Bwit
from django.http import Http404

# Create your views here.

# class ConnectionList()


class UserDetail(APIView):
    parser_classes = (MultiPartParser, )

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def login(request):
    serializer = AuthTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data.get('user')
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})


@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response(status=status.HTTP_200_OK)


class UserCreate(APIView):

    parser_classes = (MultiPartParser, )
    """
    Creates the user.
    """

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        print(request.data)

        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = user_serializer.data
                json['token'] = token.key
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(
            user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
def current_user(request):
    user = request.user
    return Response({
        'username': user.username,
        'email': user.email,
        'id': user.id,
    })


@api_view(['get', 'post'])
def bwits_list(request):
    return "the last things you had to do"


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


# @api_view([])
# def delete_connection(request, pk):
#     return Response(status=status.HTTP_204_NO_CONTENT)
