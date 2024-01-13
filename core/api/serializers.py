# reference https://www.django-rest-framework.org/api-guide/serializers/#modelserializer
# opt to omit the modelserializer in the future for more fine tuning
from rest_framework import serializers as serial

from ..models import *


class StandardPageSerializer(serial.ModelSerializer):
    class Meta:
        model = StandardPage
        fields = [
            "title",
            "subtitle",
            "body",
            "content_panels",
        ]


class BlogSerializer(serial.ModelSerializer):
    class Meta:
        model = Blog
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
class UserSerialier(serial.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "password_salt",  # Unique for every user, inserted when the account is created
            "password",  # Hashed with the salt - MD5 or SHA1, your preference
            "date_created",
        ]
