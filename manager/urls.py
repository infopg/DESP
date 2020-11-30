from django.conf.urls import url, re_path

from manager import views
from manager.views import timeliner,visualization

urlpatterns = [
    url(r'/timeliner', timeliner, name='timeliner'),
    url(r'/visualization', visualization, name='visualization')

]
