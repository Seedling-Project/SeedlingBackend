# reference https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
# opt to omit the modelserializer in the future for more fine tuning
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from rest_framework.fields import Field
from rest_framework.serializers import Serializer, SerializerMethodField
from wagtail.api.v2.serializers import PageSerializer
from wagtail.documents.models import Document
from wagtail.images.models import Image

# import all the models from models.py two directories up
from ..models import *

class CustomPageSerializer(PageSerializer):
    body = serializers.SerializerMethodField()

    def get_body(self, obj):
        # Serialize the StreamField data here, resolving document and image references
        # This is a simplified example; adapt it to your actual StreamField structure
        result = []
        for block in obj.body:  # Assuming 'obj.body' is your StreamField
            if block.block_type == 'document':
                # Fetch and serialize the document
                doc_id = block.value
                document = Document.objects.get(id=doc_id)
                block_data = {
                    'type': block.block_type,
                    'id': doc_id,
                    'title': document.title,
                    'url': document.file.url,  # Or use a method to get the full URL
                }
            elif block.block_type == 'image':
                # Fetch and serialize the image
                img_id = block.value
                image = Image.objects.get(id=img_id)
                block_data = {
                    'type': block.block_type,
                    'id': img_id,
                    'title': image.title,
                    'url': image.file.url,  # Adjust according to how you store/access images
                }
            else:
                block_data = {
                    'type': block.block_type,
                    'value': block.value,
                }
            result.append(block_data)
        return result
class ContentBlockSerializer(PageSerializer):
    body = SerializerMethodField()

    def get_body(self, obj):
        # Custom logic to serialize StreamField content
        result = []
        for block in obj.body:  # obj.body accesses the StreamField data
            block_type = block.block_type
            block_value = block.value
            if block_type == 'document':
                # Apply custom serialization for a document block
                serialized_data = self.serialize_document_block(block_value)
            elif block_type == 'image':
                # Similarly for an image block
                serialized_data = self.serialize_image_block(block_value)
            else:
                # Handle other types or provide a default serialization
                serialized_data = {'type': block_type, 'value': block_value}
            result.append(serialized_data)
        return result

    def serialize_document_block(self, value):
        # Example: Fetch document by ID and serialize including URL
        document = Document.objects.get(id=value)
        return {
            'type': 'document',
            'id': document.id,
            'title': document.title,
            'url': document.file.url,
        }

    # Similar method for `serialize_image_block`

    class Meta:
        model = ContentBlock
        fields = ['title', 'subtitle', 'author', 'date', 'body']



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


# Serializer for individual Images within a StreamField or similar
class ImageChooserBlockSerializer(Field):
    def to_representation(self, value):
        try:
            image = Image.objects.get(id=value)
            # Assuming you're using Wagtail's built-in Image model, which uses renditions for URLs
            # Adjust this to match how you want to expose image URLs (e.g., specific rendition)
            image_url = image.get_rendition("fill-800x600").url
            return {
                "id": image.id,
                "title": image.title,
                "url": image_url,  # URL to the actual image, potentially with a specific rendition
            }
        except ObjectDoesNotExist:
            return None
