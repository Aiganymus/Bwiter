from . import views
from django.urls import path

urlpatterns = [
    path('users/', views.UserCreate.as_view(), name='account-create'),
    path('all_users/', views.UserList.as_view(), name='users_list'),
    path('current/', views.current_user, name='current_user'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='account-detail'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
