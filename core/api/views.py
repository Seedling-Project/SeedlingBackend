from django.shortcuts import render  # might need down the line
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from core.models import *

from .serializers import *


class StandardViewSet(viewsets.ModelViewSet):
    queryset = StandardPage.objects.all()
    serializer_class = StandardPageSerializer
    permission_classes = []
    authentication_classes = []


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = DocumentPage.objects.all()
    serializer_class = DocumentSerializer
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
