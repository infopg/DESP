# from . import forms
from django.http import JsonResponse


def questionaire_submit(request):
    print(request.POST)
    return JsonResponse({'msg': 'success'})