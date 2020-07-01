from django import forms
from captcha.fields import CaptchaField


class UserForm(forms.Form):
    username = forms.CharField(label='用户名', max_length=128, widget=forms.TextInput(attrs={'class': 'form-control',
                                                                                          'placeholder': '请输入账号',
                                                                                          'autofocus': '',
                                                                                          }))
    password = forms.CharField(label='密码', max_length=256, widget=forms.PasswordInput(attrs={'class': 'form-control',
                                                                                             'placeholder': '请输入密码'})
                               )
    captcha = CaptchaField(label='验证码')

    remember_me = forms.BooleanField(required=False)

class ForgetForm(forms.Form):
    email = forms.EmailField(required=True)
    captcha = CaptchaField(error_messages={'invalid': '验证码错误'})


class ResetForm(forms.Form):
    newpwd1 = forms.CharField(required=True, min_length=6,
                                  error_messages={'required': '密码不能为空.', 'min_length': "至少6位"})
    newpwd2 = forms.CharField(required=True, min_length=6,
                                  error_messages={'required': '密码不能为空.', 'min_length': "至少6位"})


