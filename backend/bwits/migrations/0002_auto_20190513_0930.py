# Generated by Django 2.2.1 on 2019-05-13 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bwits', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bwit',
            name='picture',
            field=models.FileField(blank=True, upload_to=''),
        ),
    ]