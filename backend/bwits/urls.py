from .views import bwit_detail, bwits, following_bwits, likes_bwit, all_likes, LikesList
from django.urls import path

urlpatterns = [
    path('bwits/', bwits, name='bwits'),
    path('following_bwits/<int:pk>/', following_bwits, name='following_bwits'),
    path('bwits/<int:pk>/', bwit_detail, name='bwit_detail'),
    path('bwits/<int:pk>/likes/', likes_bwit, name='likes_bwit'),
    path('likes/', all_likes, name='all_likes'),
    path('all_likes/', LikesList.as_view(), name='second'),
]
