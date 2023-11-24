from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.Serializer):
    class Meta:
        model = UserProfile
        # display all fields for user profile prints
        fields = '__all__'