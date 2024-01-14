# reference https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
# opt to omit the modelserializer in the future for more fine tuning
from rest_framework import serializers as serial
from rest_framework import serializers

from core.models import StandardPage
from core.models import documentPage


from ..models import *

# FIXME: remove duplicate code
class StandardPageSerializer(serial.ModelSerializer):
    class Meta:
        model = StandardPage
        fields = [
            "title",
            "subtitle",
            "body",
            "content_panels",
        ]

class StandardSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandardPage
        fields = [
            "title",
            "subtitle",
            "body",
            "content_panels",
        ]

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = documentPage
        fields = ['title', 'subtitle', 'author', 'date', 'body']

class BlogSerializer(serial.ModelSerializer):
    class Meta:
        model = BlogPage
        fields = [
            "title",
            "body",
            "image",  # if needed
            "date_published",
            "author",  # string field for MVP, user id for future
            "slug",  # SlugField for generating valid URL
        ]


# for the future implementation of Users
# references https://dba.stackexchange.com/questions/3519/is-there-a-standard-implementation-of-a-users-database
# class UserSerialier(serial.ModelSerializer):
#     class Meta:
#         model = User
#         fields = [
#             "id",
#             "username",
#             "email",
#             "password_salt",  # Unique for every user, inserted when the account is created
#             "password",  # Hashed with the salt - MD5 or SHA1, your preference
#             "date_created",
#         ]

#         fields = ['title', 'subtitle', 'body']

