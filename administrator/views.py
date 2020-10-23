from __future__ import unicode_literals

import codecs
import csv
import json
import os
import time
import xlrd
from decimal import *
from django.core import serializers
# Create your views here.
from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import HttpResponse, render

from administrator import models
from administrator.models import TableEvaluationIndicator, TableQuestionContent
from login.models import TableUser
from supervisor.models import TableEvaluation
from supervisor.models import TableOrganization



def standard(request):
    mList = TableEvaluationIndicator.objects.filter(
        Q(table_evaluation_indicator_col_evaluation_name=request.GET.get('evalname')) &
        Q(table_evaluation_indicator_col_administrator_name=request.session.get('user_name')))
    current_eval = request.GET.get('evalname')
    current_admin = request.session.get('user_name')

    if mList.exists():
        _data = [
            {
                'id': x.table_evaluation_indicator_col_id,
                'name': x.table_evaluation_indicator_col_name + '   (' + str(
                    x.table_evaluation_indicator_col_weight) + '%)',
                'pId': x.table_evaluation_indicator_col_parent_name.table_evaluation_indicator_col_id if x.table_evaluation_indicator_col_parent_name else 0,
                'open': 1,
            } for x in mList
        ]
        administrator = request.session['user_name']
        evalname = TableEvaluation.objects.filter(
            Q(table_evaluation_col_administrator=administrator) & Q(table_evaluation_col_status='启用')).values(
            'table_evaluation_col_name')

        timeevalname = models.TableTimeliner.objects.values('table_timeliner_col_evaluation').distinct().order_by(
            'table_timeliner_col_evaluation')
        return render(request, 'standard/standard.html',

                      {'data': _data, 'evalname': evalname, 'admin': administrator, 'timeevalname': timeevalname,
                       'current_eval': current_eval, 'current_admin': current_admin})

    else:
        administrator = request.session['user_name']
        evallist = TableEvaluation.objects.filter(
            Q(table_evaluation_col_administrator=administrator) & Q(
                table_evaluation_col_status='启用') & Q(table_evaluation_col_name=request.GET.get('evalname')))
        if evallist.exists():
            root = {
                "table_evaluation_indicator_col_name": request.GET.get('evalname'),
                "table_evaluation_indicator_col_parent_name": None,
                "table_evaluation_indicator_col_weight": 100.00,
                "table_evaluation_indicator_col_evaluation_name": request.GET.get('evalname'),
                "table_evaluation_indicator_col_administrator_id": request.session['user_id'],
                "table_evaluation_indicator_col_administrator_name": administrator
            }
            TableEvaluationIndicator.objects.create(**root)
            rList = TableEvaluationIndicator.objects.filter(
                table_evaluation_indicator_col_evaluation_name=request.GET.get('evalname'),
                table_evaluation_indicator_col_administrator_name=request.session.get('user_name'))
            _data = [
                {
                    'id': x.table_evaluation_indicator_col_id,
                    'name': x.table_evaluation_indicator_col_name + '   (' + str(
                        x.table_evaluation_indicator_col_weight) + '%)',
                    'pId': x.table_evaluation_indicator_col_parent_name.table_evaluation_indicator_col_id if x.table_evaluation_indicator_col_parent_name else 0,
                    'open': 1,
                } for x in rList
            ]
            evalname = TableEvaluation.objects.filter(
                Q(table_evaluation_col_administrator=administrator) & Q(table_evaluation_col_status='启用')).values(
                'table_evaluation_col_name')
            timeevalname = models.TableTimeliner.objects.values('table_timeliner_col_evaluation').distinct().order_by(
                'table_timeliner_col_evaluation')
            return render(request, 'standard/standard.html',
                          {'data': _data, 'evalname': evalname, 'admin': administrator, 'timeevalname': timeevalname,
                           'current_eval': current_eval})
        else:
            return JsonResponse({'message': '您输入的用户或评估项目不存在'})  # 增加返回到administrator页面 及message显示的功能


def delete(request):
    if request.method == 'POST':
        delete_id = request.POST.get('delete_id')

        try:
            TableEvaluationIndicator.objects.filter(
                table_evaluation_indicator_col_id=delete_id).delete()

            return JsonResponse({'state': 1, 'message': '删除成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def edit(request):
    administrator = request.session['user_name']
    if request.method == 'GET':
        edit_id = request.GET.get('edit_id')
        List = TableEvaluationIndicator.objects.filter(
            Q(table_evaluation_indicator_col_id=edit_id) |
            Q(table_evaluation_indicator_col_parent_name=edit_id))
        mList = serializers.serialize('json', List)
        return JsonResponse({'data': mList})
    if request.method == 'POST':
        # pdb.set_trace()
        editdata = eval(request.POST.get('datalist'))

        del editdata[0]
        create_parent = editdata[0][0]
        evalname = TableEvaluationIndicator.objects.filter(table_evaluation_indicator_col_id=create_parent).values_list(
            'table_evaluation_indicator_col_evaluation_name')[0][0]

        for item in editdata:
            if item[0] == "":
                postdata = {
                    "table_evaluation_indicator_col_name": item[1],
                    "table_evaluation_indicator_col_parent_name": TableEvaluationIndicator.objects.get(
                        table_evaluation_indicator_col_id=create_parent),
                    "table_evaluation_indicator_col_weight": item[2],
                    "table_evaluation_indicator_col_evaluation_name": evalname,
                    "table_evaluation_indicator_col_administrator_id": request.session['user_id'],
                    "table_evaluation_indicator_col_administrator_name": administrator
                }
                list = []
                for a in TableEvaluationIndicator.objects.filter(
                        Q(table_evaluation_indicator_col_parent_name=create_parent)):
                    list.append(a.table_evaluation_indicator_col_weight)
                result = sum(list)
                if result + round(Decimal(float(item[2])), 2) <= 100:
                    try:
                        TableEvaluationIndicator.objects.create(**postdata)
                        continue
                    except Exception as e:
                        return JsonResponse({'message': 'Edit Error: ' + str(e)})
                else:
                    return JsonResponse({'message': '子级指标的和不应超过100%'})
            else:
                postdata_edit = {
                    "table_evaluation_indicator_col_name": item[1],
                    "table_evaluation_indicator_col_weight": item[2],
                }
                list = []
                parentid = \
                    TableEvaluationIndicator.objects.filter(table_evaluation_indicator_col_id=item[0]).values_list(
                        'table_evaluation_indicator_col_parent_name')[0][0]
                for a in TableEvaluationIndicator.objects.filter(
                        Q(table_evaluation_indicator_col_parent_name=parentid) &
                        ~Q(
                            table_evaluation_indicator_col_id=item[0])):
                    list.append(a.table_evaluation_indicator_col_weight)
                result = sum(list)
                if result + Decimal(float(item[2])) <= 100:
                    try:
                        TableEvaluationIndicator.objects.filter(
                            table_evaluation_indicator_col_id=item[0]).update(**postdata_edit)
                        continue
                    except Exception as e:
                        return JsonResponse({'message': 'Edit Error: ' + str(e)})
                else:
                    return JsonResponse({'message': '子级指标的和不应超过100%'})
        return JsonResponse({'message': '修改成功!'})


def indicator_export(request):
    # pdb.set_trace()
    response = HttpResponse(content_type='text/csv')
    response.write(codecs.BOM_UTF8)
    response['Content-Disposition'] = "attachment;filename=evaluation_indicator.csv"
    writer = csv.writer(response)
    page_eval = request.GET.get('current_eval')
    indicator = models.TableEvaluationIndicator.objects.filter(table_evaluation_indicator_col_evaluation_name=page_eval)
    writer.writerow(['Indicator_Name', 'Indicator_Weight', 'Indicator_Parent_Name'])
    write_length = len(indicator)
    write_position = 1
    while write_position < write_length:
        # pdb.set_trace()
        try:
            indicator_row = indicator[write_position]
            select_parent = models.TableEvaluationIndicator.objects.get(table_evaluation_indicator_col_name=page_eval)
        except:
            return JsonResponse({'message': '没有数据可导出'})
        if indicator_row.table_evaluation_indicator_col_parent_name == select_parent:
            try:
                writer.writerow([indicator_row.table_evaluation_indicator_col_name,
                                 indicator_row.table_evaluation_indicator_col_weight])
                write_position += 1
            except:
                return JsonResponse({'message': '高级节点数据缺失'})
        else:
            try:
                parent_key = indicator_row.table_evaluation_indicator_col_parent_name
                writer.writerow([indicator_row.table_evaluation_indicator_col_name,
                                 indicator_row.table_evaluation_indicator_col_weight,
                                 parent_key.table_evaluation_indicator_col_name])
                write_position += 1
            except:
                return JsonResponse({'message': '节点数据缺失'})

    return response



def timeliner(request):
    # pdb.set_trace()
    administrator = request.session['user_name']
    evalname = TableEvaluation.objects.filter(
        Q(table_evaluation_col_administrator=administrator) & Q(table_evaluation_col_status='启用')).values(
        'table_evaluation_col_name')
    timeevalname = models.TableTimeliner.objects.values('table_timeliner_col_evaluation').distinct().order_by(
        'table_timeliner_col_evaluation')
    timeline_list = models.TableTimeliner.objects.filter(
        table_timeliner_col_evaluation=request.GET.get('timeevalname')).order_by('table_timeliner_col_start')

    dateline_list = models.TableTimeliner.objects.filter(
        table_timeliner_col_evaluation=request.GET.get('timeevalname')).order_by('table_timeliner_col_start')
    date_length = len(dateline_list)
    order_list = []
    order_count = 0
    while order_count < date_length:
        order_list.append(dateline_list.values_list('table_timeliner_col_id')[order_count][0])
        order_count = order_count + 1
    dateline = models.TableTimeliner.objects.filter(pk__in=order_list)

    for date in dateline:
        date_start = date.table_timeliner_col_start
        date_new_start = str(date_start).replace('-', '/')
        date_use_start = date_new_start[-2:] + date_new_start[4:8] + date_new_start[0:4]
        date.table_timeliner_col_start = date_use_start
        date_end = date.table_timeliner_col_end
        date_new_end = str(date_end).replace('-', '/')
        date_use_end = date_new_end[-2:] + date_new_end[4:8] + date_new_end[0:4]
        date.table_timeliner_col_end = date_use_end
    return render(request, 'standard/timeliner.html',
                  {'evalname': evalname, 'admin': administrator, 'timeevalname': timeevalname,
                   'timeline_list': timeline_list, 'dateline': dateline})


def timeliner_create(request):
    if request.method == 'POST':
        # pdb.set_trace()
        timeliner_name = request.POST.get('name')
        timeliner_content = request.POST.get('content')
        timeliner_status = request.POST.get('status')
        timeliner_start = request.POST.get('start')
        timeliner_end = request.POST.get('end')
        timeliner_eval = request.POST.get('eval')
        if timeliner_end > timeliner_start:
            try:
                models.TableTimeliner.objects.create(table_timeliner_col_name=timeliner_name,
                                                     table_timeliner_col_content=timeliner_content,
                                                     table_timeliner_col_status=timeliner_status,
                                                     table_timeliner_col_start=timeliner_start,
                                                     table_timeliner_col_end=timeliner_end,
                                                     table_timeliner_col_evaluation=timeliner_eval
                                                     )
                return JsonResponse({'state': 1, 'message': '创建成功!'})
            except Exception as e:
                return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})
        else:
            return JsonResponse({'message': '结束时间不得晚于开始时间！'})


def timeliner_edit(request):
    if request.method == 'GET':
        timeliner_id = request.GET.get('edit_id')
        timeline = serializers.serialize("json",
                                         models.TableTimeliner.objects.filter(table_timeliner_col_id=timeliner_id))
        # print(eva)
        return JsonResponse({'timeline': timeline})
    elif request.method == 'POST':
        # pdb.set_trace()
        timeliner_id = request.POST.get('edit_id')
        timeliner_name = request.POST.get('edit_name')
        timeliner_content = request.POST.get('content')
        timeliner_status = request.POST.get('status')
        timeliner_start = request.POST.get('start')
        timeliner_end = request.POST.get('end')
        if timeliner_end > timeliner_start:
            try:
                models.TableTimeliner.objects.filter(table_timeliner_col_id=timeliner_id).update(
                    table_timeliner_col_name=timeliner_name,
                    table_timeliner_col_content=timeliner_content,
                    table_timeliner_col_status=timeliner_status,
                    table_timeliner_col_start=timeliner_start,
                    table_timeliner_col_end=timeliner_end)
                return JsonResponse({'state': 1, 'message': '创建成功!'})
            except Exception as e:
                return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})
        else:
            return JsonResponse({'message': '结束时间不得晚于开始时间！'})


def timeliner_delete(request):
    # pdb.set_trace()
    if request.method == 'POST':
        timeliner_id = request.POST.get('delete_id')
        for tl_del in models.TableTimeliner.objects.filter(table_timeliner_col_id=timeliner_id):
            if tl_del.table_timeliner_col_status == '进行中':
                return JsonResponse({'message': '项目进行中，不允许删除！'})
            elif tl_del.table_timeliner_col_status == '已完成':
                return JsonResponse({'message': '已完成项目不允许删除！'})
            else:
                try:
                    models.TableTimeliner.objects.get(table_timeliner_col_id=timeliner_id).delete()
                    return JsonResponse({'state': 1, 'message': '修改成功!'})
                except Exception as e:
                    return JsonResponse({'state': 0, 'message': 'Edit Error: ' + str(e)})


## 上传功能
def excel_import_indicator(filename, this_eval_name, this_admin_name):
    # pdb.set_trace()
    file_excel = 'C:/Users/DELL/Desktop/DESP/DESP/uploads/indicator/' + str(filename)  ##存储绝对路径（随时修改）
    by_name = u'Sheet1'
    data = xlrd.open_workbook(file_excel)  # 打开excel
    table = data.sheet_by_name(by_name)  # 表单名称
    n_rows = table.nrows  # 行数
    row_dict = {}
    for row_num in range(1, n_rows):
        row = table.row_values(row_num)  # 获得每行的字段
        # seq = [row[0], row[1], row[2], row[3]]
        seq_indicator = {'Indicator_Name': row[0], 'Indicator_Weight': row[1],
                         'Indicator_Parent_Name': row[2]}
        row_dict[row_num] = seq_indicator
    data_indicator = {
        'code': '200',
        'msg': 'success',
        'data': row_dict
    }
    indicator_write = data_indicator['data']
    max_position = len(indicator_write)

    try:
        position = 1
        while position <= max_position:
            try:

                arrs = indicator_write[position]
                indicatorname = arrs['Indicator_Parent_Name']
                parent_key = models.TableEvaluationIndicator.objects.get(
                    Q(table_evaluation_indicator_col_name=indicatorname) &
                    Q(table_evaluation_indicator_col_evaluation_name=this_eval_name))
                parent_id = models.TableEvaluationIndicator.objects.filter(
                    Q(table_evaluation_indicator_col_name=indicatorname) &
                    Q(table_evaluation_indicator_col_evaluation_name=this_eval_name)).values_list(
                    'table_evaluation_indicator_col_id')[0][0]
                admin_username = this_admin_name
                admin_id = TableUser.objects.filter(table_user_col_name=admin_username).values(
                    'table_user_col_id')[0]['table_user_col_id']
            except:
                return JsonResponse({'message': '上级指标问题'})
            try:
                current_child_name = arrs['Indicator_Name']
                child_name_set = models.TableEvaluationIndicator.objects.filter(
                    table_evaluation_indicator_col_parent_name=parent_id).values(
                    'table_evaluation_indicator_col_name')
                current_name_query = {'table_evaluation_indicator_col_name': current_child_name}
            except:
                return JsonResponse({'message': '模板不应包含最高级节点'})
            try:
                if current_name_query in child_name_set:
                    return JsonResponse({'message': '指标重复命名'})
                else:
                    try:
                        add_weight = arrs['Indicator_Weight']
                        children_set = models.TableEvaluationIndicator.objects.filter(
                            table_evaluation_indicator_col_parent_name=parent_id).values_list(
                            'table_evaluation_indicator_col_weight')
                        children_lenth = len(children_set) - 1
                        # print(children_lenth)
                    except:
                        return JsonResponse({'message': '权重问题'})
                    if children_lenth == -1:
                        current_weight = 0
                    else:
                        try:
                            child_position = 0
                            weight_list = []
                            while child_position <= children_lenth:
                                try:
                                    weight_list.append(children_set[child_position][0])
                                    child_position += 1
                                    current_weight = sum(weight_list)
                                    # print(current_weight)
                                except:
                                    return JsonResponse({'message': '权重问题'})
                        except:
                            return JsonResponse({'message': '权重问题'})
                try:
                    if round(Decimal(float(add_weight)), 2) + current_weight <= 100:
                        print(Decimal(float(add_weight)))
                        print(current_weight)
                        try:
                            models.TableEvaluationIndicator.objects.create(
                                table_evaluation_indicator_col_name=arrs['Indicator_Name'],
                                table_evaluation_indicator_col_weight=arrs['Indicator_Weight'],
                                table_evaluation_indicator_col_evaluation_name=this_eval_name,
                                table_evaluation_indicator_col_administrator_id=admin_id,
                                table_evaluation_indicator_col_administrator_name=this_admin_name,
                                table_evaluation_indicator_col_parent_name=parent_key)
                        except:
                            return JsonResponse({'message': '填写格式问题'})
                    else:
                        return JsonResponse({'message': '权重问题'})
                    position = position + 1
                except:
                    return JsonResponse({'message': '权重问题'})
            except:
                return JsonResponse({'message': '检查指标命名及权重'})
        else:
            return JsonResponse({'message': '上传成功'})
    except:
        return JsonResponse({'message': '表格填写格式问题！'})


def upload_indicator(request):
    if request.method == 'GET':
        return render(request, 'standard/standard.html')
    elif request.method == 'POST':
        get_eval_name = request.GET.get('current_eval')
        get_admin_name = request.GET.get('current_admin')
        obj = request.FILES.get('file_obj_indicator')
        obj.name = time.strftime("%Y%m%d_%H_%M_%S_", time.localtime(time.time())) + obj.name
        # print(obj)
        if str(obj).endswith('.xlsx'):
            f = open(os.path.join('DESP', 'uploads', 'indicator', obj.name), 'wb')  ##存储位置
            for chunk in obj.chunks():
                f.write(chunk)
            f.close()
            return excel_import_indicator(obj, get_eval_name, get_admin_name)
        else:
            return JsonResponse({'message': '文件格式错误！'})


def download_indicator(request):
    # pdb.set_trace()
    file = open('DESP/uploads/indicator/TableIndicator_Import.xlsx', 'rb')
    response = HttpResponse(file)
    response['Content-Type'] = 'application/octet-stream'  # 设置头信息，告诉浏览器这是个文件
    response['Content-Disposition'] = 'attachment;filename="TableIndicator_Import.xlsx"'
    return response


def questionaire(request):
    a = request.GET.get('nodeID')
    questionlist = TableQuestionContent.objects.filter(table_question_content_col_indicator_id=a).order_by(
        'table_question_content_col_question_number')
    administrator = request.session['user_name']
    evalname = TableEvaluation.objects.filter(
        Q(table_evaluation_col_administrator=administrator) & Q(table_evaluation_col_status='启用')).values(
        'table_evaluation_col_name')
    data = [
        {
            'question_type': x.table_question_content_col_question_type,
            'indicator_id': x.table_question_content_col_indicator_id,
            'question_number': x.table_question_content_col_question_number,
            'marks': x.table_question_content_col_marks,
            'content': x.table_question_content_col_content,
            # 'scheme': x.table_question_content_col_mark_scheme,
            'markmethod': x.table_question_content_col_markmethod,
            'attachment': x.table_question_content_col_question_attachment,
            'class': x.table_question_content_col_question_class,
            'import': x.table_question_content_col_question_importanswer,
            'required': x.table_question_content_col_question_required
        } for x in questionlist
    ]
    return render(request, 'standard/questionaire.html', {'data': data, 'evalname': evalname})


def choice_add(request):
    print(request.POST)
    if 'required' in request.POST:
        required = 'on'
    else:
        required = 'off'
    if 'attachment' in request.POST:
        attachment = 'on'
    else:
        attachment = 'off'
    if 'importanswer' in request.POST:
        importanswer = 'on'
    else:
        importanswer = 'off'
    data = {}
    data['title'] = request.POST['choicetitle']
    data['answer'] = request.POST.getlist('choice')
    existquestion = TableQuestionContent.objects.filter(
        table_question_content_col_indicator_id=request.POST['indicatorID']).values_list(
        'table_question_content_col_question_number')
    list = []
    for i in range(0, len(existquestion)):
        list.append(existquestion[i][0])
    if int(request.POST['questionnumber']) in list:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": request.POST['class'],
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
        }
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=request.POST['indicatorID']) & Q(
            table_question_content_col_question_number=request.POST['questionnumber'])).update(**question)
        return JsonResponse({'msg': 'success'})
    else:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": request.POST['class'],
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.create(**question)
        return JsonResponse({'msg': 'success'})


def blank_add(request):
    if 'required' in request.POST:
        required = 'on'
    else:
        required = 'off'
    if 'attachment' in request.POST:
        attachment = 'on'
    else:
        attachment = 'off'
    if 'importanswer' in request.POST:
        importanswer = 'on'
    else:
        importanswer = 'off'
    data = {}
    data['title'] = request.POST['choicetitle']
    existquestion = TableQuestionContent.objects.filter(
        table_question_content_col_indicator_id=request.POST['indicatorID']).values_list(
        'table_question_content_col_question_number')
    list = []
    for i in range(0, len(existquestion)):
        list.append(existquestion[i][0])
    if int(request.POST['questionnumber']) in list:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": '',
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
        }
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=request.POST['indicatorID']) & Q(
            table_question_content_col_question_number=request.POST['questionnumber'])).update(**question)
        return JsonResponse({'msg': 'success'})
    else:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": '',
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.create(**question)
        return JsonResponse({'msg': 'success'})


def answer_add(request):
    if 'required' in request.POST:
        required = 'on'
    else:
        required = 'off'
    if 'attachment' in request.POST:
        attachment = 'on'
    else:
        attachment = 'off'
    if 'importanswer' in request.POST:
        importanswer = 'on'
    else:
        importanswer = 'off'
    data = {}
    data['title'] = request.POST['choicetitle']
    existquestion = TableQuestionContent.objects.filter(
        table_question_content_col_indicator_id=request.POST['indicatorID']).values_list(
        'table_question_content_col_question_number')
    list = []
    for i in range(0, len(existquestion)):
        list.append(existquestion[i][0])
    if int(request.POST['questionnumber']) in list:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": request.POST['height'],
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=request.POST['indicatorID']) & Q(
            table_question_content_col_question_number=request.POST['questionnumber'])).update(**question)
        return JsonResponse({'msg': 'success'})
    else:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": request.POST['height'],
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.create(**question)
        return JsonResponse({'msg': 'success'})


def matrix_add(request):
    if 'required' in request.POST:
        required = 'on'
    else:
        required = 'off'
    if 'attachment' in request.POST:
        attachment = 'on'
    else:
        attachment = 'off'
    if 'importanswer' in request.POST:
        importanswer = 'on'
    else:
        importanswer = 'off'
    data = {}
    data['title'] = request.POST['choicetitle']
    data['column'] = request.POST.getlist('choice')
    data['rows'] = str(request.POST['row']).splitlines()
    existquestion = TableQuestionContent.objects.filter(
        table_question_content_col_indicator_id=request.POST['indicatorID']).values_list(
        'table_question_content_col_question_number')
    list = []
    for i in range(0, len(existquestion)):
        list.append(existquestion[i][0])
    if int(request.POST['questionnumber']) in list:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": request.POST['class'],
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=request.POST['indicatorID']) & Q(
            table_question_content_col_question_number=request.POST['questionnumber'])).update(**question)
        return JsonResponse({'msg': 'success'})
    else:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": request.POST['class'],
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.create(**question)
        return JsonResponse({'msg': 'success'})


def form_add(request):
    print(request.POST)
    if 'required' in request.POST:
        required = 'on'
    else:
        required = 'off'
    if 'attachment' in request.POST:
        attachment = 'on'
    else:
        attachment = 'off'
    if 'importanswer' in request.POST:
        importanswer = 'on'
    else:
        importanswer = 'off'
    data = {}
    data['title'] = request.POST['choicetitle']
    data['column'] = str(request.POST['column']).splitlines()
    data['rows'] = str(request.POST['row']).splitlines()
    existquestion = TableQuestionContent.objects.filter(
        table_question_content_col_indicator_id=request.POST['indicatorID']).values_list(
        'table_question_content_col_question_number')
    list = []
    for i in range(0, len(existquestion)):
        list.append(existquestion[i][0])
    if int(request.POST['questionnumber']) in list:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": '',
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=request.POST['indicatorID']) & Q(
            table_question_content_col_question_number=request.POST['questionnumber'])).update(**question)
        return JsonResponse({'msg': 'success'})
    else:
        question = {
            "table_question_content_col_question_type": request.POST['questiontype'],
            "table_question_content_col_question_class": '',
            "table_question_content_col_question_required": required,
            "table_question_content_col_question_attachment": attachment,
            "table_question_content_col_indicator_id": request.POST['indicatorID'],
            "table_question_content_col_question_number": request.POST['questionnumber'],
            'table_question_content_col_question_importanswer': importanswer,
            'table_question_content_col_markmethod': request.POST['markmethod'],
            'table_question_content_col_marks': request.POST['points'],
            'table_question_content_col_content': json.dumps(data, ensure_ascii=False),
            'table_question_content_col_mark_scheme': None
        }
        TableQuestionContent.objects.create(**question)
        return JsonResponse({'msg': 'success'})


def accumulation(request):
    print(request.POST)
    indicatorID = request.POST['indicatorID']
    questionnumber = request.POST['questionnumber']
    scheme = request.POST['datalist']
    markmethod = request.POST['markmethod']
    if TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber)).exists():
        print(TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber)))
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber)).update(
            table_question_content_col_mark_scheme=scheme, table_question_content_col_markmethod=markmethod)
    else:
        TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber)).create(
            table_question_content_col_mark_scheme=scheme, table_question_content_col_indicator_id=indicatorID,
            table_question_content_col_question_number=questionnumber, table_question_content_col_markmethod=markmethod)
    return JsonResponse({'msg': 'success'})



def questionaire_manage(request):
    administrator = request.session['user_name']
    evalname = TableEvaluation.objects.filter(
        Q(table_evaluation_col_administrator=administrator) & Q(table_evaluation_col_status='启用'))
    eval_data = [
        {
            'org_id': TableOrganization.objects.filter(
                Q(table_organization_col_name=project.table_evaluation_col_organization)).values_list('table_organization_col_id')[0][0],
            'org_name': project.table_evaluation_col_organization,
            'project_name': project.table_evaluation_col_name,
            'project_admin': project.table_evaluation_col_administrator
        } for project in evalname
    ]
    # print(eval_data)
    return render(request, 'standard/manage.html', {'eval_data': eval_data, 'evalname': evalname})



def questionaire_submit(request):
    print(request.POST)
    if request.POST['questiontype'] == '选择题':
        choice_add(request)
    elif request.POST['questiontype'] == '填空题':
        blank_add(request)
    elif request.POST['questiontype'] == '简答题':
        answer_add(request)
    elif request.POST['questiontype'] == '矩阵题':
        matrix_add(request)
    elif request.POST['questiontype'] == '表格题':
        form_add(request)
    return JsonResponse({'msg': 'success'})


def question_delete(request):
    print(request.POST)
    index = request.POST['index']
    nodeID = request.POST['nodeID']
    TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=nodeID) & Q(
        table_question_content_col_question_number=index)).delete()
    length = TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=nodeID)).count()
    list = []
    for i in range(0, length):
        list.append(i + 1)
    for obj, questionnumber in zip(
            TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=nodeID)).order_by(
                'table_question_content_col_question_number'), list):
        obj.table_question_content_col_question_number = questionnumber
        obj.save()
    return JsonResponse({'msg': '删除成功！'})


def questionaire_delete(request):
    nodeID = request.POST['nodeID']
    TableQuestionContent.objects.filter(table_question_content_col_indicator_id=nodeID).delete()
    return JsonResponse({'msg': '删除成功!'})

def scheme_show(request):
    indicatorID = request.POST['indicatorID']
    questionnumber = request.POST['questionnumber']
    if TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber)).exists():
        scheme = TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber))
        markmethod = TableQuestionContent.objects.filter(Q(table_question_content_col_indicator_id=indicatorID) & Q(
            table_question_content_col_question_number=questionnumber)).values_list('table_question_content_col_markmethod')[0][0]
        data = serializers.serialize('json', scheme)
        return JsonResponse({'data': data, 'msg': 'Created', 'markmethod': markmethod})
    else:
        return JsonResponse({'msg': 'Notcreatedyet'})



def export_answer(request):  # 导出答案部分
    pass


def import_answer(request):  # 导入答案部分
    pass
