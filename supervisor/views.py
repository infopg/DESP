from django.shortcuts import render
from . import models
from django.shortcuts import HttpResponseRedirect, Http404, HttpResponse, render
import json
import pdb
import csv
import codecs
from django.http import JsonResponse
from django.core import serializers
from django.db.models import Q
from django.contrib.auth.hashers import make_password, check_password
from datetime import datetime
import numpy


# Create your views here.
def institute(request):
    o = models.TableOrganization.objects.all()
    _data = [
        {
            'id': x.table_organization_col_id,
            'name': x.table_organization_col_name,
            'pId': x.table_organization_col_parent_name.table_organization_col_id if x.table_organization_col_parent_name else 0,
            'open': 1,
        } for x in o
    ]
    list = []
    eval_org = models.TableEvaluation.objects.values_list('table_evaluation_col_organization')
    for i in range(0, len(eval_org)):
        list.append(eval_org[i][0])
    listforfilter = json.dumps(list)
    return render(request, 'supervisor/institute.html', {'data': _data, 'array': listforfilter})


def organization_create(request):
    if request.method == 'POST':
        organization_name = request.POST.get('create_name')
        organization_location = request.POST.get('create_location')
        organization_zipcode = request.POST.get('create_zipcode')
        parent = models.TableOrganization.objects.get(table_organization_col_name=request.POST.get('parent_name'))
        organization_field = request.POST.get('create_field')
        org = models.TableOrganization.objects.filter(table_organization_col_name=organization_name)
        # pdb.set_trace()
        if org.exists():
            message = '该机构名已存在，请重新输入'
            return JsonResponse({'message': message})
        else:
            try:
                models.TableOrganization.objects.create(table_organization_col_name=organization_name,
                                                        table_organization_col_address=organization_location,
                                                        table_organization_col_postcode=organization_zipcode,
                                                        table_organization_col_field=organization_field,
                                                        table_organization_col_parent_name=parent)
                return JsonResponse({'state': 1, 'message': '创建成功!'})
            except Exception as e:
                return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def organization_edit(request):
    if request.method == 'GET':
        organization_id = request.GET.get('edit_id')
        org = serializers.serialize("json",
                                    models.TableOrganization.objects.filter(table_organization_col_id=organization_id))
        return JsonResponse({'org': org})
    elif request.method == 'POST':
        organization_id = request.POST.get('edit_id')
        organization_name = request.POST.get('edit_name')
        organization_location = request.POST.get('edit_location')
        organization_zipcode = request.POST.get('edit_zipcode')
        parent = models.TableOrganization.objects.get(
            table_organization_col_name=request.POST.get('edit_parent'))  # 添加判断是否存在这个父节点
        organization_field = request.POST.get('edit_field')
        org = models.TableOrganization.objects.filter(table_organization_col_name=organization_name)
        if org.exists():
            message = '该机构名已存在，请重新输入'
            return JsonResponse({'message': message})
        try:
            models.TableOrganization.objects.filter(table_organization_col_id=organization_id).update(
                table_organization_col_name=organization_name,
                table_organization_col_address=organization_location,
                table_organization_col_postcode=organization_zipcode,
                table_organization_col_field=organization_field,
                table_organization_col_parent_name=parent
            )
            return JsonResponse({'state': 1, 'message': '修改成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Edit Error: ' + str(e)})


def organization_delete(request):
    if request.method == 'POST':
        organization_id = request.POST.get('delete_id')
        try:
            models.TableOrganization.objects.get(table_organization_col_id=organization_id).delete()
            return JsonResponse({'state': 1, 'message': '修改成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Edit Error: ' + str(e)})


def organization_export(request):
    # pdb.set_trace()
    response = HttpResponse(content_type='text/csv')
    response.write(codecs.BOM_UTF8)
    response['Content-Disposition'] = "attachment;filename='organization.csv'"
    writer = csv.writer(response)
    o = models.TableOrganization.objects.all()
    writer.writerow(['id', 'name'])
    for x in o:
        writer.writerow([x.table_organization_col_id, x.table_organization_col_name])
    return response


def user_delete(request):
    if request.method == 'POST':
        user_id = request.POST.get('delete_id')
        try:
            models.TableUser.objects.get(table_user_col_id=user_id).delete()
            return JsonResponse({'state': 1, 'message': '修改成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Edit Error: ' + str(e)})


def user_edit(request):
    if request.method == 'POST':
        # pdb.set_trace()
        user_id = request.POST.get('edit_id')
        user_name = request.POST.get('edit_name')
        user_sex = request.POST.get('edit_sex')
        user_location = request.POST.get('edit_location')
        user_password = request.POST.get('edit_password')
        user_password_twice = request.POST.get('edit_password_twice')
        user_organizationID = request.POST.get('edit_organizationID'),
        user_department = request.POST.get('edit_department'),
        user_email = request.POST.get('edit_email'),
        user_zipcode = request.POST.get('edit_zipcode')
        user_edu = request.POST.get('edit_edu')
        user_type = request.POST.get('edit_type')
        if user_type == '超级管理员':
            user_type_id = 0
        elif user_type == '管理员':
            user_type_id = 1
        elif user_type == '机构管理员':
            user_type_id = 2
        elif user_type == '机构用户':
            user_type_id = '3'
        elif user_type == '专家用户':
            user_type_id = '4'
        else:
            user_type_id = None
        user_phonenumber = request.POST.get('edit_phonenumber')
        if user_password != user_password_twice:
            message = '你两次输入的密码不一致，请重新输入'
            return JsonResponse({'message': message})
        try:

            models.TableUser.objects.filter(table_user_col_id=user_id).update(table_user_col_name=user_name,
                                                                              table_user_col_sex=user_sex,
                                                                              table_user_col_address=user_location,
                                                                              table_user_col_postcode=user_zipcode,
                                                                              table_user_col_type=user_type,
                                                                              table_user_col_type_id=user_type_id,
                                                                              table_user_col_password=make_password(
                                                                                  user_password),
                                                                              table_user_col_organization_id=
                                                                              user_organizationID[0],
                                                                              table_user_col_department=user_department[
                                                                                  0],
                                                                              table_user_col_email=user_email[0],
                                                                              table_user_col_bachelor=user_edu,
                                                                              table_user_col_mobile=user_phonenumber)
            return JsonResponse({'state': 1, 'message': '修改成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def user_create(request):
    global user_type_id
    if request.method == 'POST':
        user_name = request.POST.get('create_name')
        user_sex = request.POST.get('create_sex')
        user_location = request.POST.get('create_location')
        user_password = request.POST.get('create_password')
        user_password_twice = request.POST.get('create_password_twice')
        user_organizationID = request.POST.get('create_organizationID'),
        user_department = request.POST.get('create_department'),
        user_email = request.POST.get('create_email'),
        user_zipcode = request.POST.get('create_zipcode')
        user_edu = request.POST.get('create_edu')
        user_type = request.POST.get('create_type')
        if user_type == '超级管理员':
            user_type_id = 0
        elif user_type == '管理员':
            user_type_id = 1
        elif user_type == '机构管理员':
            user_type_id = 2
        elif user_type == '机构用户':
            user_type_id = '3'
        elif user_type == '专家用户':
            user_type_id = '4'
        else:
            user_type = None
        user_phonenumber = request.POST.get('create_phonenumber')
        if user_password != user_password_twice:
            message = '你两次输入的密码不一致，请重新输入'
            return JsonResponse({'message': message})
        try:
            models.TableUser.objects.create(table_user_col_name=user_name,
                                            table_user_col_sex=user_sex,
                                            table_user_col_address=user_location,
                                            table_user_col_postcode=user_zipcode,
                                            table_user_col_type=user_type,
                                            table_user_col_type_id=user_type_id,
                                            table_user_col_password=make_password(user_password),
                                            table_user_col_organization_id=user_organizationID[0],
                                            table_user_col_department=user_department[0],
                                            table_user_col_email=user_email[0],
                                            table_user_col_bachelor=user_edu,
                                            table_user_col_mobile=user_phonenumber),
            return JsonResponse({'state': 1, 'message': '创建成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def people(request):
    users = models.TableUser.objects.all()
    return render(request, 'supervisor/people.html', locals())


def organization_evaluation(request):
    org_eval = models.TableEvaluation.objects.all()
    organizations = models.TableOrganization.objects.filter(~Q(table_organization_col_name="机构树"))
    users = models.TableUser.objects.filter(table_user_col_type_id=1)
    return render(request, 'supervisor/evaluation.html', locals())


def evaluation_create(request):
    if request.method == 'POST':
        # pdb.set_trace()
        evalutaion_name = request.POST.get('name')
        evaluation_admin = request.POST.get('admin')
        evaluation_status = request.POST.get('status')
        evaluation_createtime = request.POST.get('createtime')
        evaluation_endtime = request.POST.get('endtime')
        evaluation_deliver = request.POST.get('deliver')
        evaluation_mark = request.POST.get('mark')
        evalutaion_organization = request.POST.get('organization')
        try:
            models.TableEvaluation.objects.create(table_evaluation_col_name=evalutaion_name,
                                                  table_evaluation_col_administrator=evaluation_admin,
                                                  table_evaluation_col_status=evaluation_status,
                                                  table_evaluation_col_create_time=evaluation_createtime,
                                                  table_evaluation_col_finish_time=evaluation_endtime,
                                                  table_evaluation_col_organization=evalutaion_organization,
                                                  table_evaluation_col_deliver=evaluation_deliver,
                                                  table_evaluation_col_mark=evaluation_mark)
            return JsonResponse({'state': 1, 'message': '创建成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def evaluation_edit(request):
    if request.method == 'POST':
        # pdb.set_trace()
        evaluation_id = request.POST.get('edit_id')
        evalutaion_name = request.POST.get('name')
        evaluation_admin = request.POST.get('admin')
        evaluation_status = request.POST.get('status')
        evaluation_createtime = request.POST.get('createtime')
        evaluation_endtime = request.POST.get('endtime')
        evaluation_deliver = request.POST.get('deliver')
        evaluation_mark = request.POST.get('mark')
        evalutaion_organization = request.POST.get('organization')
        try:
            models.TableEvaluation.objects.filter(table_evaluation_col_id=evaluation_id).update(
                table_evaluation_col_name=evalutaion_name,
                table_evaluation_col_administrator=evaluation_admin,
                table_evaluation_col_status=evaluation_status,
                table_evaluation_col_create_time=evaluation_createtime,
                table_evaluation_col_finish_time=evaluation_endtime,
                table_evaluation_col_organization=evalutaion_organization,
                table_evaluation_col_deliver=evaluation_deliver,
                table_evaluation_col_mark=evaluation_mark)
            return JsonResponse({'state': 1, 'message': '创建成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def evaluation_delete(request):
    if request.method == 'POST':
        evaluation_id = request.POST.get('delete_id')
        try:
            models.TableEvaluation.objects.get(table_evaluation_col_id=evaluation_id).delete()
            return JsonResponse({'state': 1, 'message': '修改成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Edit Error: ' + str(e)})
