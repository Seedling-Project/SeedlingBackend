# reference https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
# opt to omit the modelserializer in the future for more fine tuning
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers as serial
from rest_framework.fields import Field
from wagtail.documents.models import Document

# import all the models from models.py two directories up
from ..models import *


class DocumentSerializer(serial.ModelSerializer):
    class Meta:
        model = DocumentPage
        fields = [
            "title",
            "subtitle",
            "author",
            "date",
            "body",
        ]


class DocumentChooserBlockSerializer(Field):
    def to_representation(self, value):
        # Assuming `value` is an ID or similar identifier of a Document
        try:
            document = Document.objects.get(id=value)
            return {
                "id": document.id,
                "title": document.title,
                "url": document.file.url,  # This gives the URL to the actual document file
            }
        except ObjectDoesNotExist:
            # Handle the case where the Document does not exist
            print("Document does not exist")
            return None
