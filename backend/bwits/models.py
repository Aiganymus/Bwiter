from django.db import models
from accounts.models import CustomUser, User
from django.db.models import UniqueConstraint


class BwitManager(models.Model):
    def get_queryset(self, author):
        super(BwitManager, self).get_queryset().filter(author=author)


class Bwit(models.Model):
    body = models.CharField(max_length=20)
    picture = models.FileField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author_bwits')

    def __str__(self):
        return self.author.username + " " + self.body


class LikeBwitManager(models.Manager):
    def get_queruset(self, bwit):
        return super(LikeBwitManager, self).get_queruset().filter(bwit=bwit)


class LikeBwit(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user_likes')
    bwit = models.ForeignKey(
        Bwit, on_delete=models.CASCADE, related_name='bwit_likes')

    class Meta:
        unique_together = (('user', 'bwit'))

    def __str__(self):
        return self.user.username + " " + self.bwit.body
