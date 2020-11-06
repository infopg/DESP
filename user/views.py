from .models import TableQuestionContent
from .serializer import QuestionContentSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import status
from rest_framework import mixins

from django_filters.rest_framework import DjangoFilterBackend



from random import Random

from django.contrib.auth.hashers import make_password, check_password

from django.shortcuts import render
from django.shortcuts import redirect
from login import models
# from . import forms
from django.views import View
from login.utils.email_send import send_register_email
from supervisor.models import TableEvaluation
from django.db.models import Q
from login.forms import ForgetForm, ResetForm
import pdb
import datetime, json
from django.core import serializers
from administrator.models import TableTimeliner




# class QuestionContentView(APIView):
#     """
#     返回所有的问卷内容
#     """
#     def get(self, request, format=None):
#         question_contents = TableQuestionContent.objects.all()[:10]
#         serializer = QuestionContentSerializer(question_contents, many=True)
#         return Response(serializer.data)


# class QuestionContentViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
#
#     queryset = TableQuestionContent.objects.all()[:10]
#     serializer_class = QuestionContentSerializer

    # def get_queryset(self):
    #
    #     return TableQuestionContent.objects.filter(table_question_content_col_question_id__gt=10)

def user(request):
    return render(request, 'user/user.html')