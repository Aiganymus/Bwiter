from . import views
from django.urls import path

urlpatterns = [
    path(
        'connections/<int:pk>',
        views.create_or_delete_connection,
        name='create_or_delete_connection'),
    path('users/<int:pk>/followers/', views.get_followers, name='followers'),
    path('users/<int:pk>/following/', views.get_following, name='following'),
]
