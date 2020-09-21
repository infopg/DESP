from .models import TableQuestionContent
from .serializer import QuestionContentSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class QuestionContentView(APIView):
    """
    返回所有的问卷内容
    """
    def get(self, request, format=None):
        question_contents = TableQuestionContent.objects.all()[:10]
        serializer = QuestionContentSerializer(question_contents, many=True)
        return Response(serializer.data)