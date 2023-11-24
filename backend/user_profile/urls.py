from django.urls import path
from .views import GetUserProfile

urlpatterns = [
    path('user', GetUserProfile.as_view())
]