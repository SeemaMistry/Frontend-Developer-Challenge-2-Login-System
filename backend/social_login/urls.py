from django.urls import path
from .views import GoogleLogin

urlpatterns = [
   path('rest-auth/google/', GoogleLogin.as_view(), name='google_login')
]