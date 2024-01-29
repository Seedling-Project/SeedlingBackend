from django.db import models
from wagtail import blocks
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.documents.blocks import DocumentChooserBlock
from wagtail.documents.edit_handlers import DocumentChooserPanel
from wagtail.embeds.blocks import EmbedBlock
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page

# class StandardPage(Page):
#     subtitle = models.CharField(max_length=250)
#     body = StreamField(
#         [
#             ("heading", blocks.CharBlock(form_classname="title")),
#             ("paragraph", blocks.RichTextBlock()),
#         ],
#         use_json_field=True,
#     )
#
#     content_panels = Page.content_panels + [
#         FieldPanel("subtitle"),
#         FieldPanel("body"),
#     ]
#
#     api_fields = [
#         "subtitle",
#         "body",
#     ]


class DocumentPage(Page):
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
    related_document = models.ForeignKey(
        "wagtaildocs.Document",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    content_panels = Page.content_panels + [
        FieldPanel("title"),
        FieldPanel("subtitle"),
        FieldPanel("author"),
        FieldPanel("date"),
        FieldPanel("body"),
        DocumentChooserPanel("document"),
    ]

    api_fields = [
        "title",
        "subtitle",
        "author",
        "date",
        "body",
    ]


# class BlogPage(Page):
#     author = models.CharField(max_length=255)
#     date = models.DateField("Post date")
#     body = StreamField(
#         [
#             ("heading", blocks.CharBlock(form_classname="title")),
#             ("paragraph", blocks.RichTextBlock()),
#             ("image", ImageChooserBlock()),
#         ],
#         use_json_field=True,
#     )
#
#     content_panels = Page.content_panels + [
#         FieldPanel("author"),
#         FieldPanel("date"),
#         FieldPanel("body"),
#     ]
