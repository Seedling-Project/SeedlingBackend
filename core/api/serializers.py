# reference https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
# opt to omit the modelserializer in the future for more fine tuning

# import all the models from models.py two directories up
from ..models import *

from wagtail.core.models import Page
from wagtail.images.models import Image
from wagtail.documents.models import Document
from rest_framework import serializers

class CustomPageSerializer(serializers.ModelSerializer):
    body = serializers.SerializerMethodField()

    class Meta:
        model = Page
        fields = ['title', 'subtitle', 'author', 'date', 'body']

    def get_body(self, instance):
        result = []
        for block in instance.body:  # This accesses StreamField data
            block_data = self.serialize_block(block)
            result.append(block_data)
        return result

    def serialize_block(self, block):
        if block.block_type == 'document':
            document_data = self.get_document_data(block.value)
            return {'type': 'document', 'value': document_data}
        elif block.block_type == 'image':
            image_data = self.get_image_data(block.value)
            return {'type': 'image', 'value': image_data}
        else:
            # Default handling for other block types
            return {'type': block.block_type, 'value': block.value}

    def get_document_data(self, doc_id):
        try:
            document = Document.objects.get(id=doc_id)
            return {
                'id': document.id,
                'title': document.title,
                'url': document.file.url,
            }
        except Document.DoesNotExist:
            return {'error': 'Document not found'}

    def get_image_data(self, img_id):
        try:
            image = Image.objects.get(id=img_id)
            # Here, you might want to use a specific rendition for the image URL
            rendition = image.get_rendition('fill-800x600')  # Adjust the filter spec as needed
            return {
                'id': image.id,
                'title': image.title,
                'url': rendition.url,
            }
        except Image.DoesNotExist:
            return {'error': 'Image not found'}
