# Generated by Django 2.2.1 on 2019-05-13 12:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bwits', '0004_auto_20190513_1202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bwit',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author_bwits', to='accounts.CustomUser'),
        ),
    ]