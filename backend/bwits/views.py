from django.shortcuts import render
from accounts.serializers import CustomUserSerializer, UserSerializer
from mutuals.serializers import ConnectionSerializer
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Bwit, LikeBwit
from .serializers import BwitSerializer, LikeBwitSerializer, BwitSerializerTwo
from rest_framework import generics
from django.contrib.auth.models import User
from mutuals.models import Connection
from itertools import chain
from .serializers import BwitSerializer, LikeBwitSerializer

@api_view(['GET', 'POST'])
def bwits(request):
    if request.method == "GET":
        bwits = Bwit.objects.filter(author=request.user)
        serializer = BwitSerializer(bwits, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = BwitSerializerTwo(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE', 'PUT'])
def bwit_detail(request, pk):
    try:
        bwit = Bwit.objects.get(id=pk)
    except Bwit.DoesNotExist as error:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = BwitSerializer(bwit)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = BwitSerializer(instance=bwit, data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        bwit.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def likes_bwit(request, pk):
    try:
        bwit = Bwit.objects.get(id=pk)
    except Bwit.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        bwit_likes = bwit.bwit_likes.all()
        serializer = LikeBwitSerializer(bwit_likes, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = LikeBwitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, bwit=bwit)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def following_bwits(request, pk):
    follower = User.objects.get(pk=pk)
    followed = [
        connection.following
        for connection in Connection.objects.filter(followed=follower)
    ]

    bwits = []
    for oneFollowed in followed:
        bwit = Bwit.objects.filter(author=oneFollowed)
        bwits.append(bwit)
    # print(bwits)

    result = list(chain(*bwits))

    # serialized = UserSerializer(followed, many=True)
    # print(serialized.data)
    serializer = BwitSerializer(result, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def all_likes(request):
    if request.method == "GET":
        likes = LikeBwit.objects.all()
        serializer = LikeBwitSerializer(likes, many=True)
        return Response(serializer.data)