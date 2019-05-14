from .views import bwit_detail, bwits, following_bwits, likes_bwit
from django.urls import path

urlpatterns = [
    path('bwits/', bwits, name='bwits'),
    path('following_bwits/<int:pk>/', following_bwits, name='following_bwits'),
    path('bwits/<int:pk>', bwit_detail, name='bwit_detail'),
    path('bwits/<int:pk>/likes_bwit/', likes_bwit, name='likes_bwit'),
]