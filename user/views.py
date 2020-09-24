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


# class QuestionContentView(APIView):
#     """
#     返回所有的问卷内容
#     """
#     def get(self, request, format=None):
#         question_contents = TableQuestionContent.objects.all()[:10]
#         serializer = QuestionContentSerializer(question_contents, many=True)
#         return Response(serializer.data)


class QuestionContentViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    queryset = TableQuestionContent.objects.all()[:10]
    serializer_class = QuestionContentSerializer

    # def get_queryset(self):
    #
    #     return TableQuestionContent.objects.filter(table_question_content_col_question_id__gt=10)

