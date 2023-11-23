from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.contrib.auth.models import User
from django.contrib import auth
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator

@method_decorator(ensure_csrf_cookie, name='dispatch')
class CheckAuthenticated(APIView):

    def get(self, request, format=None):
        pass

@method_decorator(ensure_csrf_cookie, name='dispatch')
class RegisterView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        pass

@method_decorator(ensure_csrf_cookie, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        pass

@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(APIView):

    def post(self, request, format=None):
        pass

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})
