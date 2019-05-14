from django.db import models
from accounts.models import CustomUser, User
from bwits.models import Bwit


class Comment(models.Model):
    body = models.CharField(max_length=21)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author_comment')
    bwit = models.ForeignKey(
        Bwit, on_delete=models.CASCADE, related_name='bwit_comments')




