from django.conf.urls import include, url
from rest_framework import routers

from .views import RegistrationAPI, LoginAPI, UserAPI

urlpatterns = [
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view())
]