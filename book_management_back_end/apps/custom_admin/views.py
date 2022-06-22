from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.custom_admin.api.serializer import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from django.contrib import auth
from rest_framework.parsers import JSONParser

# Create your views here.

@csrf_exempt
def admin_login(request):
    if request.method == 'GET':
        return HttpResponse('<h1>Admin Login Api<h1/>')
    elif request.method == 'POST':
        data=JSONParser().parse(request)
        admin = auth.authenticate(email=data['email'], password=data['password'])
        if admin and admin.is_staff:
            auth.login(request,admin)
            return JsonResponse('user is authenticated',status=status.HTTP_202_ACCEPTED,safe=False)
        return JsonResponse('user is not authenticated',status=status.HTTP_401_UNAUTHORIZED,safe=False)


    
            

