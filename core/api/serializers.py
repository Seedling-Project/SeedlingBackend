from rest_framework import serializers

from core.models import StandardPage
from core.models import documentPage

class StandardSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandardPage
        fields = ['title', 'subtitle', 'body']

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = documentPage
        fields = ['title', 'subtitle', 'author', 'date', 'body']