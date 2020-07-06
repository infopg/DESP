# -*- coding: utf-8 -*-    
# 上一句话是要识别中文
from __future__ import unicode_literals

from django.shortcuts import render
from cmdb import models
from django.shortcuts import HttpResponse
from django.http import JsonResponse
import json
from django.core import serializers
# Create your views here.
from django.views.decorators.cache import cache_page
# 引入自定义模块
from cmdb.myfunction import to_mysql
# 导入excel 需要的包 需要用pip安装
# pip install xlrd 
import xlrd
import uuid
import random

# views.py

@cache_page(60 * 15)  # 秒数，这里指缓存 15 分钟，不直接写900是为了提高可读性 这要提高加载速度
# 读取excel表格
def excel_import(request):
    file_excel = '路径'
    col_name_index = 0
    by_name = u'表单名称'
    data = xlrd.open_workbook(file_excel) #打开excel
    table = data.sheet_by_name(by_name) #表单名称
    n_rows = table.nrows  # 行数
    row_dict = {}
    for row_num in range(1, n_rows):
        row = table.row_values(row_num) #获得每行的字段
        # seq = [row[0], row[1], row[2], row[3]]
        seq = {'ID': row[0], 'Type_ID': row[1], 'Type': row[2], 'Name': row[3], 
        'Real_Name': row[4], 'Org_ID': row[5], 'Mobile': row[6], 'Tel': row[7],
        'Address': row[8], 'Password': row[9], 'Email':row[10], 'Title': row[11],
        'Postcode': row[12], 'Department': row[13], 'Work_Field': row[14], 'Sex': row[15],
        'Nationality': row[16], 'Bachelor': row[17], 'Memo': row[18], 'Birthday': row[19],
        'IdentityID': row[20]} 
        row_dict[row_num] = seq
    da = {
        'code': '200',
        'msg': 'success',
        'data': row_dict
    }
    # 调用方法 ---自定义模板函数 这里必须要return
    return to_mysql(da)




##other .py files
from cmdb import models
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
