from login import views
from django.contrib.auth import views as auth_views
from django.urls import path
from django.conf.urls import include, url
from login.views import ForgetPwdView,ResetView,ModifyView

urlpatterns = [
    path('', views.abstract, name='abstract'),
    path('login', views.login, name='login'),
    path('forget', ForgetPwdView.as_view(),name='forget_pwd'),
    path('reset/<str:active_code>', ResetView.as_view(), name='reset'),
    path('modify', ModifyView.as_view(), name='modify'),
    path('modifydone',views.Modifydone),
    path('Aboutus', views.Aboutus, name='Aboutus'),
]
