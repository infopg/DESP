"""Visualization URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from visualization.views import comparison,details_comparison,comparison2,comparison3,comparison4,comparison5,overview_research,overview_institute,overview_system,network_manage,network_tech,app_education,app_manage,app_research_calculate,app_research_cloud,app_research_data,app_research_share,app_science,env_management,env_infrastructure,env_resource

urlpatterns = [
    # path('admin/', admin.site.urls),

    path('admin/comparison',comparison, name='comparison'),
    path('admin/details_comparison',details_comparison, name='details_comparison'),
    path('admin/comparison2',comparison2, name='comparison2'),
    path('admin/comparison3',comparison3, name='comparison3'),
    path('admin/comparison4',comparison4, name='comparison4'),
    path('admin/comparison5', comparison5, name='comparison5'),
    path('admin/overview_research', overview_research, name='overview_research'),
    path('admin/overview_institute', overview_institute, name='overview_institute'),
    path('admin/overview_system', overview_system, name='overview_system'),
    path('admin/network_manage', network_manage, name='network_manage'),
    path('admin/network_tech', network_tech, name='network_tech'),
    path('admin/app_education', app_education, name='app_education'),
    path('admin/app_manage', app_manage, name='app_manage'),
    path('admin/app_research_calculate', app_research_calculate, name='app_research_calculate'),
    path('admin/app_research_cloud', app_research_cloud, name='app_research_cloud'),
    path('admin/app_research_data', app_research_data, name='app_research_data'),
    path('admin/app_research_share', app_research_share, name='app_research_share'),
    path('admin/app_science', app_science, name='app_science'),
    path('admin/env_management', env_management, name='env_management'),
    path('admin/env_infrastructure', env_infrastructure, name='env_infrastructure'),
    path('admin/env_resource', env_resource, name='env_resource'),











]
