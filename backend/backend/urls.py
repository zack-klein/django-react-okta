"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include

import django_saml2_auth.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # The order of paths/urls matters here; put these first.
    path('api/sso/', include('django_saml2_auth.urls')),
    # Overrides django's default and admin login
    path('api/accounts/login/', django_saml2_auth.views.signin),
    path('api/admin/login/', django_saml2_auth.views.signin),
]
