from supervisor import views
from django.conf import settings
from django.urls import path,re_path
import pdb
from django.conf.urls import include, url
# pdb.set_trace()
urlpatterns = [
    re_path(r'/organization_create$',views.organization_create,name='organization_create'),
    re_path(r'/organization_edit$',views.organization_edit,name='organization_edit'),
    re_path(r'/organization_delete$',views.organization_delete,name='organization_delete'),
    re_path(r'/organization_export$',views.organization_export,name='organization_export'),
    re_path(r'/institute$', views.institute,name='institute'),
    re_path(r'/people_create$', views.user_create, name='user_create'),
    re_path(r'/people_edit$', views.user_edit, name='user_edit'),
    re_path(r'/people_delete$', views.user_delete, name='user_delete'),
    url(r'/people',views.people,name='people'),
    re_path(r'/evaluation_create$', views.evaluation_create, name='evaluation_create'),
    re_path(r'/evaluation_edit$', views.evaluation_edit, name='evaluation_edit'),
    re_path(r'/evaluation_delete$', views.evaluation_delete, name='evaluation_delete'),
    url(r'/evaluation',views.organization_evaluation,name='evaluation'),

]