from administrator import views
from django.conf import settings
from django.urls import path
from django.conf.urls import include, url,re_path
from administrator.views import standard, delete, edit, mark_method, timeliner

urlpatterns = [
    url('/standard', standard, name='standard'),
    url(r'/delete', name='delete', view=views.delete),
    url(r'/edit', name='edit', view=views.edit),
    url(r'/mark_method', name='mark_method', view=mark_method),
    re_path(r'/indicator_export$', views.indicator_export, name='indicator_export'),
    re_path(r'/upload_indicator$', views.upload_indicator, name='upload_indicator'),
    url(r'^download_indicator/', views.download_indicator, name="download_indicator"),
    re_path(r'/timeliner_create$', views.timeliner_create, name='timeliner_create'),
    re_path(r'/timeliner_edit$', views.timeliner_edit, name='timeliner_edit'),
    re_path(r'/timeliner_delete$', views.timeliner_delete, name='timeliner_delete'),
    url('/timeliner', timeliner, name='timeliner'),
    url(r'/timeline_users',views.timeline_users, name='timeline_users')
]
