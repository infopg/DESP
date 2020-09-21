from . import views
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path

urlpatterns = [
    url(r'/.*$', views.QuestionContentView.as_view()),
]