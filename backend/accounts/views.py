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
        username = data['username'] # TODO: set restrictions on username to only allow letters and numbers. No special characters allowed.
        password = data['password'] # TODO: normalize username to database before saving
        re_password = data['re_password']
        email = data['email'] # TODO: normalize email to lowercase before saving to database

        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({'error': 'username already exists'})
                else:
                    if len(password) >= 6:
                        return Response({'error': 'password must be at least 8 characters'})
                    else:
                        user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                        
                        # create and save new profile (1:1 rs of User:user_profile)
                        return Response({'success': 'new user created successfully'})
            else: 
                return Response({'error': 'passwords do not match or password must be at least 8 characters'})
         
        except:
            return Response({'error': 'Something went wrong when trying to create a new user'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            # retireve data 
            data = self.request.data
            password = data['password']
            login_input = data['login_input'] # dont know if "login_input" is an email or username they are using to login
            
            # determine if login_input is email or username
            if '@' in login_input:
                try:
                    # get the user with this email address and pass the username to authenticate
                    user = User.objects.get(email=login_input)
                    user = auth.authenticate(username=user.username, password=password)
                except:
                    return Response({'error': 'no such email exists in the database'})            
            else:
                # authenticate as with username
                user = auth.authenticate(username=login_input, password=password)
            
            if user is not None:
                auth.login(request, user)
                return Response({'success': 'successful login and user authenticated', 'username':user.get_username()})
            else:
                return Response({'error': 'incorrect login credentials used'})

        except:
            return Response({'error': 'Something went wrong when trying to create a new user'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(APIView):

    def post(self, request, format=None):
        try:
            # logout user
            auth.logout(request)
            return Response({'success': 'successfully logged out user'})

        except:
            return Response({'error': 'Something went wrong when trying to logout'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})
