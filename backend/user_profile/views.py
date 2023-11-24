from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer

class GetUserProfile(APIView):
    def get(self, request, format=None):
        # get current user
        user = self.request.user
        try:
            # obtain user profile of user and pass it in response
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)
            return Response({'profile': user_profile.data})
        except:
            return Response({'error': 'Something went wrong when retrieving user profile'})

