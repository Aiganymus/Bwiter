from . import views
from django.urls import path

urlpatterns = [
    path('users/', views.UserCreate.as_view(), name='account-create'),
    path(
        'connections/<int:pk>',
        views.create_or_delete_connection,
        name='create_or_delete_connection'),
    path('current/', views.current_user, name='current_user'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='account-detail'),
    path('users/<int:pk>/followers', views.get_followers, name='followers'),
    # path('users/<int:pk>/bwits', views.bwits, name='followers'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
