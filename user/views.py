# from . import forms
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password, check_password

from django.shortcuts import redirect
from django.shortcuts import render
from django.views import View

from administrator.models import TableTimeliner, TableQuestionContent
from login import models
from login.forms import ForgetForm, ResetForm
from login.utils.email_send import send_register_email

from supervisor.models import TableEvaluation

from supervisor.models import TableOrganization
from administrator.models import TableTimeliner
from login import models
import datetime
from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import render, HttpResponse, redirect
import xlwt
from io import BytesIO
from xlwt import Workbook
from django.utils.encoding import escape_uri_path


def user(request):
    user_name = request.session['user_name']
    current_eval = request.GET.get('evalname')
    print(current_eval)
    orgid = \
        models.TableUser.objects.filter(table_user_col_name=user_name).values_list('table_user_col_organization')[0][0]
    orgname = \
    TableOrganization.objects.filter(table_organization_col_id=orgid).values_list('table_organization_col_name')[0][
            0]
    print(orgname)

    # data_org = TableEvaluation.objects.all()
    # evaindex = []
    # for each in data_org:
    #     evaindex.append(each.table_evaluation_col_id)
    # # print(evaindex)
    # # print(data_org)
    #
    # orgs = []
    # inde = []
    # name = ''
    # for each in data_org:
    #     # print(each.table_evaluation_col_organization)
    #     for letter in each.table_evaluation_col_organization:
    #         i = 0
    #         # print(letter)
    #         if letter != ',':
    #             name += letter
    #         else:
    #             # print(name, '\n')
    #             inde.append(name)
    #             name = ''
    #         if len(name) == len(each.table_evaluation_col_organization):
    #             # print(name, '\n')
    #             inde.append(name)
    #             orgs.append(inde)
    #             inde = []
    #             name = ''
    #             i += 1
    #     if i == 0:
    #         orgs.append(inde)
    #         inde = []
    #         name = ''
    # # print(orgs)
    # i=0
    # count=0
    # listeval=[]
    # for x in orgs:
    #     index = 0
    #     # print(x)
    #     for each1 in x:
    #             # print(each.table_organization_col_name)
    #         if each1 == orgname:
    #                 # print(each1)
    #             index += 1
    #     if index==0:
    #         i+=1
    #         # print(i)
    #     else:
    #         t=i+count
    #         eval = TableEvaluation.objects.filter(table_evaluation_col_id=evaindex[t])
    #         listeval.append(eval)
    #         count+=1
    #         # print(t, count)
    #         # print(eval)
    # evals=[]
    # all_question=[]
    # for each in listeval:
    #     # print(each[0].table_evaluation_col_name)
    #     evals.append(each[0].table_evaluation_col_name)
    # # eval = TableEvaluation.objects.filter(table_evaluation_col_id=evaindex[i])
    # name1=request.GET.get('name1')
    # for each in evals:
        # print(each)
    eval = TableEvaluation.objects.filter(table_evaluation_col_name=current_eval)
    if len(eval) != 0:
        # if index>0:
        questionaire_answer = set(
            TableQuestionContent.objects.filter(
                table_question_content_col_evalname=eval[0].table_evaluation_col_id).values_list(
                'table_question_content_col_indicator_id'))
        group = []
        for eachquestion in questionaire_answer:
            group.append(eachquestion)
        list = []
        for i in range(0, len(questionaire_answer)):
            list.append(TableQuestionContent.objects.filter(table_question_content_col_indicator_id=group[i][0]))
        if len(list) != 0:
            page = request.GET.get('page')
            question = []
            if page == None:
                for x in list[0]:
                    question.append({
                        'question_id': x.table_question_content_col_question_id,
                        'question_type': x.table_question_content_col_question_type,
                        'content': x.table_question_content_col_content,
                        'indicator_id': x.table_question_content_col_indicator_id
                    })
                page_num = 0
            else:
                num = int(page)
                for x in list[num]:
                    question.append({
                        'question_id': x.table_question_content_col_question_id,
                        'question_type': x.table_question_content_col_question_type,
                        'content': x.table_question_content_col_content,
                        'indicator_id': x.table_question_content_col_indicator_id
                    })
                page_num = num
            return render(request, 'user/user.html',
                          { 'current_eval':current_eval,'question': question,
                           'preview_length': len(list),
                           'user': user_name, 'orgname': orgname, 'page_num': page_num})

            # print(question)
            # all_question.append(question)
        else:
            return render(request, 'user/user.html', {'current_eval':current_eval,'user': user_name, 'orgname': orgname})
    else:
        return render(request, 'user/user.html', {'current_eval':current_eval,'user': user_name, 'orgname': orgname})


def questionaire_submit(request):
    print(request.POST)
    return JsonResponse({'msg': 'success'})

# def visualization(request):
#     check_app = request.GET.get('app')
#     return render(request, 'visual/overview_research.html', {'check_app': check_app})