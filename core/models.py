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

    subtitle = models.CharField(max_length=250)
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
        FieldPanel("subtitle"),
        FieldPanel("author"),
        FieldPanel("date"),
        FieldPanel("body"),
    ]

    def get_child_pages_data(self):
        children = self.get_children().live().values('id', 'title', 'url_path')
        return list(children)

    api_fields = [
        APIField("title"),
        APIField("subtitle"),
        APIField("author"),
        APIField("date"),
        APIField("body"),
        APIField('child_pages', get_child_pages_data),
    ]


class FileModel(models.Model):
    # other fields
    # ...
    file = models.FileField(storage=PrivateMediaStorage())
    # other fields
    # ...
