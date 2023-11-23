from django.urls import path, include
from .views import CheckAuthenticated, RegisterView, LoginView, LogoutView, GetCSRFTokenView

urlpatterns = [
    path('login/', include(LoginView.as_view())),
    path('register/', include(RegisterView.as_view())),
    path('logout/', include(LogoutView.as_view())),
    path('csrf_cookie/', include(GetCSRFTokenView.as_view())),
    path('authenticated/', include(CheckAuthenticated.as_view()))
]