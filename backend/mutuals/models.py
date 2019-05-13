from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


class Connection(models.Model):
    created = models.DateTimeField(auto_now_add=True, editable=False)
    followed = models.ForeignKey(
        User, related_name="followed", on_delete=models.CASCADE)
    following = models.ForeignKey(
        User, related_name="followers", on_delete=models.CASCADE)

    def validate_unique(self, exclude=None):
        qs = Connection.objects.filter(followed=self.followed)
        if qs.filter(following=self.following).exists():
            raise ValidationError('You cannot follow more than once')

    def save(self, *args, **kwargs):
        self.validate_unique()
        super(Connection, self).save(*args, **kwargs)

