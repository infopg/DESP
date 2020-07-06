from login import models
from django.core import serializers
from django.shortcuts import HttpResponse
from django.http import JsonResponse


def to_mysql(data):
    user_write = data['data']
    for key in user_write:
        arrs = user_write[key]
        models.TableUser.objects.create(table_user_col_id=arrs['ID'], table_user_col_type_id=arrs['Type_ID'], table_user_col_type=arrs['Type'],
        table_user_col_name=arrs['Name'], table_user_col_real_name=arrs['Real_Name'], table_user_col_organization_id=arrs['Org_ID'],
        table_user_col_mobile=arrs['Mobile'], table_user_col_tel=arrs['Tel'], table_user_col_address=arrs['Address'], table_user_col_password = arrs['Password'],
        table_user_col_email=arrs['Email'], table_user_col_title=arrs['Title'], table_user_col_postcode=arrs['Postcode'],
        table_user_col_department=arrs['Department'], table_user_col_work_field=arrs['Work_Field'], table_user_col_sex=arrs['Sex'],
        table_user_col_nationality_id=arrs['Nationality'], table_user_col_bachelor=arrs['Bachelor'], table_user_col_memo=arrs['Memo'],
        table_user_col_birth=arrs['Birthday'], table_user_col_IdentityID=arrs['IdentityID'])

    user_list = models.TableUser.objects.all()
    ajax_testvalue = serializers.serialize("json", user_list)

    return HttpResponse(ajax_testvalue, content_type='application/json')