from . import views
from django.conf.urls import url, include

from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from rest_framework.routers import DefaultRouter

from django.conf.urls import url, re_path
from administrator import views
from administrator.views import standard, timeliner, choice_add, questionaire_manage, blank_add, answer_add, matrix_add, \
    form_add, accumulation, export_answer, import_answer, questionaire_submit, questionaire_delete, question_delete, \
    scheme_show
from user import views
from user.views import user

# router = DefaultRouter()
# router.register(r'questionnaire', views.QuestionContentViewSet, basename='questionnaire')

urlpatterns = [
    url('/user', user, name='user'),

    # url(r'^', include(router.urls)),
]