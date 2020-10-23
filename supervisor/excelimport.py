from login import models
from django.core import serializers
from django.shortcuts import HttpResponse
from django.http import JsonResponse
from . import models
import pdb
from django.shortcuts import HttpResponseRedirect, Http404, HttpResponse, render


def to_tableuser(data):
    # pdb.set_trace()
    user_write = data['data']
    for key in user_write:
        arrs = user_write[key]
        orgname= arrs['Org_Name']
        if arrs['Type'] == '超级管理员':
            type_id = 0
        elif arrs['Type'] == '管理员':
            type_id = 1
        elif arrs['Type'] == '机构管理员':
            type_id = 2
        elif arrs['Type'] == '机构用户':
            type_id = 3
        elif arrs['Type'] == '专家用户':
            type_id = 4
        for organizations in models.TableOrganization.objects.filter(table_organization_col_name=orgname):
            org_id = organizations.table_organization_col_id
            print(org_id)
            models.TableUser.objects.create(table_user_col_id=arrs['ID'], table_user_col_type_id=type_id, table_user_col_type=arrs['Type'],
            table_user_col_name=arrs['Name'], table_user_col_real_name=arrs['Real_Name'], table_user_col_organization_id=org_id,
            table_user_col_mobile=arrs['Mobile'], table_user_col_tel=arrs['Tel'], table_user_col_address=arrs['Address'], table_user_col_password = arrs['Password'],
            table_user_col_email=arrs['Email'], table_user_col_title=arrs['Title'], table_user_col_postcode=arrs['Postcode'],
            table_user_col_department=arrs['Department'], table_user_col_work_field=arrs['Work_Field'], table_user_col_sex=arrs['Sex'],
            table_user_col_nationality_id=arrs['Nationality'], table_user_col_bachelor=arrs['Bachelor'], table_user_col_memo=arrs['Memo'],
            table_user_col_birth=arrs['Birthday'], table_user_col_IdentityID=arrs['IdentityID'])

            user_list = models.TableUser.objects.all()
            ajax_testvalue = serializers.serialize("json", user_list)

            return HttpResponse(ajax_testvalue, content_type='application/json')


def to_tableorg(data):
    # pdb.set_trace()
    org_write = data['data']
    for key in org_write:
        arrs = org_write[key]
        orgname=arrs['Org_Parent_Name']
        parent_id=models.TableOrganization.objects.get(table_organization_col_name=orgname)
        models.TableOrganization.objects.create(table_organization_col_id=arrs['Org_ID'], table_organization_col_name=arrs['Org_Name'], table_organization_col_address=arrs['Org_Address'],
        table_organization_col_postcode=arrs['Org_Post'], table_organization_col_field=arrs['Org_Field'], table_organization_col_parent_name=parent_id)

    org_list = models.TableOrganization.objects.all()
    ajax_testvalue = serializers.serialize("json", org_list)

    return HttpResponse(ajax_testvalue, content_type='application/json')