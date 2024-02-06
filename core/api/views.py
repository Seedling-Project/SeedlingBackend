from django.shortcuts import render  # might need down the line
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import *
from .serializers import *


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = ContentBlock.objects.all()
    serializer_class = ContentBlockSerializer
    permission_classes = []
    authentication_classes = []

    # 'get' function prototype
    def get(self, request):
        try:
            if request:
                return Response({"message": "Hello, world!"})
        except:
            print("no request")
        # assign necessary fields to a variable
        output = [""]
        # return a Response object with the output variable as the arg

    def post(self, request):
        pass
