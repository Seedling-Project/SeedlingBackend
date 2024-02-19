from django.db import models
from wagtail import blocks
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.documents.blocks import DocumentChooserBlock
from wagtail.embeds.blocks import EmbedBlock
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page

from SeedlingProject.storage_backends import PrivateMediaStorage

class ContentBlock(Page):

    tag = models.CharField(max_length=250)
    author = models.CharField(max_length=250)
    date = models.DateField("Post date")
    body = StreamField(
        [
            ("image", ImageChooserBlock()),
            ("paragraph", blocks.RichTextBlock()),
            ("document", DocumentChooserBlock()),
            ("embed", EmbedBlock()),
        ],
        use_json_field=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel("title"),
        FieldPanel("tag"),
        FieldPanel("author"),
        FieldPanel("date"),
        FieldPanel("body"),
    ]



    api_fields = [
        APIField("title"),
        APIField("tagg"),
        APIField("author"),
        APIField("date"),
        APIField("body"),
    ]


class FileModel(models.Model):
    # other fields
    # ...
    file = models.FileField(storage=PrivateMediaStorage())
    # other fields
    # ...
