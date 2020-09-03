from administrator import views
from django.conf import settings
from django.urls import path
from django.conf.urls import include, url, re_path
from administrator.views import standard, delete, edit, timeliner, choice_add, questionaire_manage, blank_add, answer_add, matrix_add,form_add


urlpatterns = [
    url('/standard', standard, name='standard'),
    url(r'/delete', name='delete', view=views.delete),
    url(r'/edit', name='edit', view=views.edit),
    re_path(r'/indicator_export$', views.indicator_export, name='indicator_export'),
    re_path(r'/upload_indicator$', views.upload_indicator, name='upload_indicator'),
    url(r'^download_indicator/', views.download_indicator, name="download_indicator"),
    re_path(r'/timeliner_create$', views.timeliner_create, name='timeliner_create'),
    re_path(r'/timeliner_edit$', views.timeliner_edit, name='timeliner_edit'),
    re_path(r'/timeliner_delete$', views.timeliner_delete, name='timeliner_delete'),
    url(r'/choice_add$', choice_add, name='choice_add'),
    url(r'/blank_add$', blank_add, name='blank_add'),
    url(r'/answer_add$', answer_add, name='answer_add'),
    url(r'/matrix_add$', matrix_add, name='matrix_add'),
    url(r'/form_add$', form_add, name='form_add'),
    url(r'/questionaire$', views.questionaire, name='questionaire'),
    url('/timeliner', timeliner, name='timeliner'),
    url(r'/questionaire_manage$', questionaire_manage, name='questionaire_manage'),




]
