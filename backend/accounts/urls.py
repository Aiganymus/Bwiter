from . import views
from django.urls import path

urlpatterns = [
    path('users/', views.UserCreate.as_view(), name='account-create'),
    path('all_users/', views.UserList.as_view(), name='users_list'),
    path('current/', views.current_user, name='current_user'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='account-detail'),
    path('users/<int:pk>/bwit_count/', views.get_user_bwits_count),
    path('users/<int:pk>/followers_count/', views.get_user_followers_count),
    path('users/<int:pk>/followed_count/', views.get_user_followed_count),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
