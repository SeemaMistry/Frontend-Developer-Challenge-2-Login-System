from django.urls import path
from .views import GetCSRFTokenView, CheckAuthenticated, RegisterView, LoginView, LogoutView

urlpatterns = [
    path('csrf_cookie', GetCSRFTokenView.as_view()),

    path('login', LoginView.as_view()),
    path('register', RegisterView.as_view()),
    path('logout', LogoutView.as_view()),
    path('authenticated', CheckAuthenticated.as_view())
]