from .views import comments, comments_detail
from django.urls import path

urlpatterns = [
    path('bwits/<int:pk>/comments/', comments),
    path('comments/<int:pk>', comments_detail),
]
