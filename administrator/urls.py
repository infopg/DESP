from administrator import views
from django.conf import settings
from django.urls import path
from django.conf.urls import include, url
from administrator.views import tree,create,delete,edit
urlpatterns = [
    path('', tree, name='tree-url'),
    url(r'/create', name='create',view=views.create),
    url(r'/delete', name='delete',view=views.delete),
    url(r'/edit', name='edit',view=views.edit)
]
