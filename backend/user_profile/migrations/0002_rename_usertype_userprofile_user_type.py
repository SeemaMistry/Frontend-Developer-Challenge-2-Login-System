# Generated by Django 4.2.7 on 2023-11-25 22:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='userType',
            new_name='user_type',
        ),
    ]
