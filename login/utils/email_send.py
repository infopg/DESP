from random import Random
from login.models import TableUser
from django.core.mail import send_mail
from DESP.settings import DEFAULT_FROM_EMAIL


def random_str(randomlength=8):
    str = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()
    for i in range(randomlength):
        str += chars[random.randint(0, length)]
    return str


def send_register_email(email, send_type):
    code = random_str(16)
    # email_record.table_user_col_code=code
    # email_record.table_user_col_email=email
    # email_record.table_user_col_send_type=send_type
    # email_record.save()
    user = TableUser.objects.get(table_user_col_email=email)
    user.table_user_col_code = code
    user.save()

    email_title = ''
    email_body = ''

    if send_type == 'login':
        email_title = '注册激活链接'
        email_body = '请点击下面的链接激活你的账号：http://127.0.0.1:8000/active/{0}'.format(code)

        send_status = send_mail(email_title, email_body, DEFAULT_FROM_EMAIL, [email])
        if send_status:
            pass
    elif send_type == 'forget':
        email_title = '密码重置链接'
        email_body = '用户{0}您好，请点击下面的链接重置你的密码：http://127.0.0.1:8000/reset/{1}'.format(user.table_user_col_name, code)
        send_status = send_mail(email_title, email_body, DEFAULT_FROM_EMAIL, [email])
        if send_status:
            pass
