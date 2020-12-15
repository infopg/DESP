from django.conf.urls import url, re_path

from administrator import views
from administrator.views import standard, timeliner, choice_add, questionaire_manage, blank_add, answer_add, matrix_add, \
    form_add, accumulation, export_answer, import_answer, questionaire_submit, questionaire_delete, question_delete, \
    scheme_show, calculate,review

urlpatterns = [
    url('/standard', standard, name='standard'),
    url(r'/delete', name='delete', view=views.delete),
    url(r'/edit', name='edit', view=views.edit),
    re_path(r'/indicator_export$', views.indicator_export, name='indicator_export'),
    re_path(r'/upload_indicator$', views.upload_indicator, name='upload_indicator'),
    url(r'^download_indicator/', views.download_indicator, name="download_indicator"),
    # 下载问卷测试/问卷状态改变测试
    url(r'^export_questionaire/', views.export_questionaire, name='export_questionaire'),
    url(r'^question_status/', views.questionaire_status, name='question_status'),
    #
    re_path(r'/timeliner_create$', views.timeliner_create, name='timeliner_create'),
    re_path(r'/timeliner_edit$', views.timeliner_edit, name='timeliner_edit'),
    re_path(r'/timeliner_delete$', views.timeliner_delete, name='timeliner_delete'),
    url(r'/questionaire_submit$', questionaire_submit, name='questionaire_submit'),
    url(r'/questionaire_delete$', questionaire_delete, name='questionaire_delete'),
    url(r'/question_delete$', question_delete, name='question_delete'),
    url(r'/choice_add$', choice_add, name='choice_add'),
    url(r'/blank_add$', blank_add, name='blank_add'),
    url(r'/answer_add$', answer_add, name='answer_add'),
    url(r'/matrix_add$', matrix_add, name='matrix_add'),
    url(r'/form_add$', form_add, name='form_add'),
    url(r'/questionaire$', views.questionaire, name='questionaire'),
    url(r'/timeliner$', timeliner, name='timeliner'),
    url(r'/questionaire_manage$', questionaire_manage, name='questionaire_manage'),
    url(r'/export_answer$', export_answer, name='export_answer'),
    url(r'/import_answer$', import_answer, name='import_answer'),
    url(r'/accumulation$', accumulation, name='accumulation'),
    url(r'scheme_show$', scheme_show, name='scheme_show'),
    url(r'/calculate', calculate, name='calculate'),
    url(r'/review', review, name='review'),
]
