from rest_framework import viewsets

from core.models import StandardPage
from .serializers import StandardSerializer

class StandardViewSet(viewsets.ModelViewSet):
    queryset = StandardPage.objects.all()
    serializer_class = StandardSerializer
    permission_classes = []
    authentication_classes = []
    