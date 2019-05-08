from django.contrib import admin
from .models import CustomUser, Connection, LikeBwit, Bwit, Comment

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Connection)
admin.site.register(LikeBwit)
admin.site.register(Bwit)
admin.site.register(Comment)
