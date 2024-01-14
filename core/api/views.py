from rest_framework import viewsets

from core.models import StandardPage
from .serializers import StandardSerializer

from core.models import documentPage
from .serializers import DocumentSerializer

class StandardViewSet(viewsets.ModelViewSet):
    queryset = StandardPage.objects.all()
    serializer_class = StandardSerializer
    permission_classes = []
    authentication_classes = []

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = documentPage.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = []
    authentication_classes = []