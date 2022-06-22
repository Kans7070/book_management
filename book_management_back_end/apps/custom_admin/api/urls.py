from django.urls import include, path
from apps.custom_admin.views import admin_login


urlpatterns = [
    path('login',admin_login,name='admin_login'),
]
