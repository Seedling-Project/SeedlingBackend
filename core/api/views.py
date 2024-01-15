from django.shortcuts import render  # might need down the line
from rest_framework import viewsets
from rest_framework.response import Response

from core.models import *

from .serializers import *


class StandardViewSet(viewsets.ModelViewSet):
    queryset = StandardPage.objects.all()
    serializer_class = StandardPageSerializer
    permission_classes = []
    authentication_classes = []

    # 'get' function prototype
    def get(self, request):
        # assign necessary fields to a variable
        # return a Response object with the output variable as the arg
        pass

    def post(self, request):
        pass


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = documentPage.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = []
    authentication_classes = []
