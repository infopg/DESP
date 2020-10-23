from . import views
from django.conf.urls import url, include

from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'questionnaire', views.QuestionContentViewSet, basename='questionnaire')

urlpatterns = [
    url(r'^', include(router.urls)),
]