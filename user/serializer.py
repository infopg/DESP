from rest_framework import serializers
from .models import TableQuestionContent

# 问卷题目序列化
class QuestionContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableQuestionContent
        fields = "__all__"
