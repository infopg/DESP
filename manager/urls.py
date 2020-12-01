from django.conf.urls import url, re_path

from manager import views
from manager.views import timeliner1,visualization

urlpatterns = [
    url(r'/visualization', visualization, name='visualization'),
    url(r'/timeliner1$', timeliner1, name='timeliner1'),

]
