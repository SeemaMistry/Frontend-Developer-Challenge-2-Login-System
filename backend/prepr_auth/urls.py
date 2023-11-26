from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    path('api-auth', include('rest_framework.urls')),
    path('accountsRegular/', include('accounts.urls')),
    path('profile/', include('user_profile.urls')),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    
   
]

# catch-all route for react router to handle
urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]