from rest_framework import serializers

from core.models import StandardPage

class StandardSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandardPage
        fields = ['title', 'subtitle', 'body']