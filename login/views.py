from random import Random

from django.contrib.auth.hashers import make_password, check_password

from django.shortcuts import render
from django.shortcuts import redirect
from login import models
from . import forms
from django.views import View
from login.utils.email_send import send_register_email
from supervisor.models import TableEvaluation
from django.db.models import Q
from login.forms import ForgetForm, ResetForm
import pdb
import datetime, json
from django.core import serializers
from administrator.models import TableTimeliner


# Create your views here.
def login(request):
    # pdb.set_trace()
    if request.session.get('is_login', None):  # 登录后再次进入login页面，则根据其权限进入对应页面

        if request.session.get('permission') == 0:
            return redirect('/supervisor')
        if request.session.get('permission') == 1:
            return redirect('/administrator')
        if request.session.get('permission') == 3:
            return redirect('/user')
        if request.session.get('permission') == 4:
            return redirect('/expert')
        if request.session.get('permission') == 2:
            return redirect('/manager')

    if request.method == 'POST':
        login_form = forms.UserForm(request.POST)
        if login_form.is_valid():
            username = login_form.cleaned_data.get('username')
            password = login_form.cleaned_data.get('password')
            # remember_me = request.POST.get('remember_me')
            remember_me = login_form.cleaned_data.get('remember_me')
            try:
                user = models.TableUser.objects.get(table_user_col_name=username)
            except:

                try:
                    user = models.TableUser.objects.get(table_user_col_mobile=username)
                except:
                    try:
                        user = models.TableUser.objects.get(table_user_col_email=username)
                    except:
                        message = '用户名不存在！'
                        return render(request, 'login/login.html', locals())

            encryptpwd = user.table_user_col_password
            if check_password(password, encryptpwd) == True:

                request.session['is_login'] = True
                request.session['user_id'] = user.table_user_col_id
                request.session['user_name'] = user.table_user_col_name
                request.session['permission'] = user.table_user_col_type_id
                request.session['lastlogintime'] = datetime.datetime.now().timestamp()
                if not remember_me:
                    request.session.set_expiry(0)
                if user.table_user_col_type_id == 0:
                    return redirect('/supervisor')
                if user.table_user_col_type_id == 1:
                    return redirect('/administrator')
                if user.table_user_col_type_id == 3:
                    return redirect('/user')
                if user.table_user_col_type_id == 4:
                    return redirect('/expert')
                if user.table_user_col_type_id == 2:
                    return redirect('/manager')

            else:
                message = '密码错误，请重新输入'
                return render(request, 'login/login.html', locals())

        else:
            message = '输入有误，请重新输入'
            return render(request, 'login/login.html', locals())

    login_form = forms.UserForm()
    return render(request, 'login/login.html', locals())


def supervisor(request):
    # pdb.set_trace()
    if not request.session.get('is_login', None) or request.session['permission'] != 0:  # 没登录过的或权限不对的，都直接返回到登录界面

        return redirect('/')
    return render(request, 'login/supervisor.html/')


def administrator(request):
    if not request.session.get('is_login', None) or request.session['permission'] != 1:
        return redirect('/')
    str = request.session.get('lastlogintime')
    d = datetime.datetime.fromtimestamp(str)
    lastlogintime = d.strftime("%Y-%m-%d %H:%M:%S.%f")
    username = request.session.get('user_name')
    models.TableUser.objects.filter(table_user_col_name=username).update(table_user_col_lastlogintime=lastlogintime)
    evalname = TableEvaluation.objects.filter(
        Q(table_evaluation_col_administrator=username) & Q(table_evaluation_col_status='启用')).values(
        'table_evaluation_col_name')
    timeevalname = TableTimeliner.objects.values('table_timeliner_col_evaluation').distinct().order_by(
        'table_timeliner_col_evaluation')
    return render(request, 'login/administrator.html', {'evalname': evalname, 'admin': username, 'timeevalname':timeevalname})


def user(request):
    if not request.session.get('is_login', None) or request.session['permission'] != 3:
        return redirect('/')
    return render(request, 'login/user.html')


def expert(request):
    if not request.session.get('is_login', None) or request.session['permission'] != 4:
        return redirect('/')
    return render(request, 'login/expert.html')


def manager(request):
    if not request.session.get('is_login', None) or request.session['permission'] != 2:
        return redirect('/')
    return render(request, 'login/manager.html')


def logout(request):
    if not request.session.get('is_login', None):
        return redirect('/')
    request.session.flush()
    return redirect('/')


def related_files(request):
    pass
    return render(request, 'login/related_files.html')


class ForgetPwdView(View):
    def get(self, request):
        forget_form = ForgetForm()
        return render(request, 'login/password_reset_form.html', {'forget_form': forget_form})

    def post(self, request):
        forget_form = ForgetForm(request.POST)
        if forget_form.is_valid():
            email = request.POST.get('email', '')
            try:
                user_email = models.TableUser.objects.get(table_user_col_email=email)
            except:
                message = "您的邮箱不存在，请校对后输入"
                return render(request, 'login/password_reset_form.html', locals())
            send_register_email(email, 'forget')
            return render(request, 'login/password_reset_done.html')
        else:
            message = "输入有误，请重新输入"
            return render(request, 'login/password_reset_form.html', locals())


class ResetView(View):
    def get(self, request, active_code):
        record = models.TableUser.objects.filter(table_user_col_code=active_code)
        print(record)
        if record:
            for i in record:
                email = i.email
                is_register = models.TableUser.objects.filter(table_user_col_email=email)
                if is_register:
                    return render(request, 'login/password_reset_confirm.html', {'email': email})
        return redirect('/')


class ModifyView(View):
    def post(self, request):
        reset_form = ResetForm(request.POST)
        if reset_form.is_valid():
            pwd1 = request.POST.get('newpwd1', '')
            pwd2 = request.POST.get('newpwd2', '')
            email = request.POST.get('email', '')
            if pwd1 != pwd2:
                return render(request, 'login/password_reset_confirm.html', {'msg': '密码不一致！'})
            else:
                user = models.TableUser.objects.get(table_user_col_email=email)
                user.table_user_col_password = make_password(pwd2)
                user.save()
                return redirect('/modifydone')
        else:
            email = request.POST.get('email', '')
            return render(request, 'login/password_reset_confirm.html', {'msg': reset_form.errors})


def Modifydone(request):
    return render(request, 'login/modifydone.html')
