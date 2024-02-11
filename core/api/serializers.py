# reference https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
# opt to omit the modelserializer in the future for more fine tuning
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from rest_framework.fields import Field
from rest_framework.serializers import Serializer, SerializerMethodField
from wagtail.documents.models import Document
from wagtail.images.models import Image

# import all the models from models.py two directories up
from ..models import *


# Assuming your Document model has a StreamField named 'body'
class StreamFieldBlockSerializer(Serializer):
    # This field will dynamically serialize each block based on its type
    blocks = SerializerMethodField()

    def get_blocks(self, instance):
        serialized_blocks = []
        for (
            block
        ) in (
            instance.body
        ):  # Adjust 'instance.body' as needed based on your model's field name
            if block.block_type == "document":
                serialized_blocks.append(
                    {
                        "type": block.block_type,
                        "value": DocumentChooserBlockSerializer().to_representation(
                            block.value
                        ),
                    }
                )
            elif block.block_type == "image":
                serialized_blocks.append(
                    {
                        "type": block.block_type,
                        "value": ImageChooserBlockSerializer().to_representation(
                            block.value
                        ),
                    }
                )
            # Add more conditions for other block types as needed
        return serialized_blocks


# Update your DocumentPageSerializer to use StreamFieldBlockSerializer for the 'body' field
class ContentBlockSerializer(serializers.ModelSerializer):
    body = StreamFieldBlockSerializer(
        source="*", required=False
    )  # Use 'source="*"' to pass the whole instance
    class Meta:
        model = ContentBlock
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
