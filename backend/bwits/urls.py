from .views import bwit_detail, bwits, all_bwits, likes_bwit
from django.urls import path

urlpatterns = [
    path('my_bwits/', bwits),
    path('all_bwits/', all_bwits, name='all_bwits'),
    path('bwits/<int:pk>', bwit_detail, name='bwit_detail'),
    path('bwits/<int:pk>/likes_bwit/', likes_bwit, name='likes_bwit'),
]
