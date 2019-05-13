from django.db import models
from django.contrib.auth.models import User
from mutuals.models import Connection


from django.core.exceptions import ValidationError


class CustomUser(models.Model):
    profile_pic = models.FileField(blank=False, null=False)
    nickname = models.CharField(max_length=200, blank=True, null=False)
    status = models.CharField(max_length=200, blank=True, null=False)
    joined_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='custom_user')

    def get_connections(self):
        connections = Connection.objects.filter(creator=self.user)
        return connections

    def get_followers(self):
        followers = Connection.objects.filter(following=self.user)
        return followers

    def __str__(self):
        return self.nickname


class Comment(models.Model):
    body = models.CharField(max_length=21)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author_comments')
    bwit = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='comment_bwits')

    def __str__(self):
        return self.author + " " + self.bwit

