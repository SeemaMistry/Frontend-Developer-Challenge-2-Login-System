from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # set fields
    first_name = models.CharField(max_length=225, default='')
    last_name = models.CharField(max_length=225, default='')
    username = models.CharField(max_length=20, default='')
    email = models.EmailField(max_length=225, default='')
    user_type = models.CharField(max_length=50, default='')
    language = models.CharField(max_length=25, default='')

    def __str__(self):
        return self.first_name + self.last_name