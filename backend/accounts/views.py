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
        # retrieve user
        user = self.request.user
        try:
            # retrieve authentication status and pass response
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error'})

        except:
            return Response({'error': 'Something went wrong when checking authentication status'})
            

@method_decorator(ensure_csrf_cookie, name='dispatch')
class RegisterView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
         # retrieve user inputs for registration 
        data = self.request.data
        first_name = data['first_name']
        last_name = data['last_name']
        username = data['username']
        password = data['password']
        re_password = data['re_password']
        email = data['email']

        try:
           # validate data then save new User
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({'error': 'username already exists'})
                else:
                    if len(password) < 8:
                        return Response({'error': 'password must be at least 8 characters'})
                    else:
                        user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                        
                        # create and save new profile (1:1 rs of User:user_profile)
                        return Response({'success': 'new user created successfully'})
            else: 
                return Response({'error': 'passwords do not match'})
            
        except:
            return Response({'error': 'Something went wrong when trying to create a new user'})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            # retireve data 
            data = self.request.data
            username = data['username'] # TODO: currently just accepting username to login 
            password = data['password']

            # use django.contrib.auth functions for login and authentication 
            user = auth.authenticate(username=username, password=password)
            
            if user is not None:
                auth.login(request, user)
                return Response({'success': 'successful login and user authenticated'})
            else:
                return Response({'error': 'incorrect login credentials used'})

        except:
            return Response({'error': 'Something went wrong when trying to create a new user'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(APIView):

    def post(self, request, format=None):
        pass

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})
