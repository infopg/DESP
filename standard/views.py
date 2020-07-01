import json
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import HttpResponseRedirect, Http404, HttpResponse, render
import pdb
from decimal import *
from supervisor.models import TableEvaluation
# Create your views here.
from django.db.models import Q

from standard.models import TableEvaluationIndicator


def tree(request):
    mList = TableEvaluationIndicator.objects.all()

    _data = [
        {
            'id': x.table_evaluation_indicator_col_id,
            'name': x.table_evaluation_indicator_col_name + '   (' + str(
                x.table_evaluation_indicator_col_weight) + '%)',
            'pId': x.table_evaluation_indicator_col_parent_name.table_evaluation_indicator_col_id if x.table_evaluation_indicator_col_parent_name else 0,
            'open': 1,
        } for x in mList
    ]

    return render(request, 'standard/tree.html', {'data': _data})


def create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        if data.get('parent') == None:
            parent = None
        else:
            parent = TableEvaluationIndicator.objects.get(table_evaluation_indicator_col_id=data['parent'])
        postdata = {
            "table_evaluation_indicator_col_name": data['name'],
            "table_evaluation_indicator_col_parent_name": parent,
            "table_evaluation_indicator_col_weight": data['weight'],
            "table_evaluation_indicator_col_evaluation_name": data['evaluation'],
            "table_evaluation_indicator_col_administrator_id": data['adminID'],
            "table_evaluation_indicator_col_administrator_name": data['admin']
        }
        list = []  # list of total weights
        for a in (TableEvaluationIndicator.objects.filter(table_evaluation_indicator_col_parent_name=parent)):
            list.append(a.table_evaluation_indicator_col_weight)
        result = sum(list)
        if result + Decimal(float(data['weight'])) <= 100:
            try:
                TableEvaluationIndicator.objects.create(**postdata)

                return JsonResponse({'state': 1, 'message': '创建成功!'})
            except Exception as e:
                return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})

        else:
            return render(request, 'standard/tree.html', {'message': 'ERROR'})


def delete(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        # pdb.set_trace()
        # postdata = {
        #     "name": data['name'],
        #     "parent": Department.objects.get(id=data['parent'])
        # }

        try:
            TableEvaluationIndicator.objects.filter(
                table_evaluation_indicator_col_id=data['parent']).delete()

            return JsonResponse({'state': 1, 'message': '创建成功!'})
        except Exception as e:
            return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})


def edit(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))

        postdata_edit = {
            "table_evaluation_indicator_col_name": data['name_edit'],
            "table_evaluation_indicator_col_weight": data['weight_edit'],
            "table_evaluation_indicator_col_id": data['parent_edit']
        }

        list_edit = []
        for filter1 in TableEvaluationIndicator.objects.filter(
                table_evaluation_indicator_col_id=data['parent_edit']):
            filter2 = TableEvaluationIndicator.objects.filter(
                table_evaluation_indicator_col_parent_name=filter1.table_evaluation_indicator_col_parent_name_id)
            for filter3 in filter2.filter(~Q(table_evaluation_indicator_col_id=data['parent_edit'])):
                list_edit.append(filter3.table_evaluation_indicator_col_weight)
            result_edit = sum(list_edit)
            if result_edit + Decimal(float(data['weight_edit'])) <= 100:

                try:
                    TableEvaluationIndicator.objects.filter(
                        table_evaluation_indicator_col_id=data['parent_edit']).update(**postdata_edit)

                    return JsonResponse({'state': 1, 'message': '创建成功!'})
                except Exception as e:
                    return JsonResponse({'state': 0, 'message': 'Create Error: ' + str(e)})
            else:
                return render(request, 'standard/tree.html', {'message': 'ERROR'})
