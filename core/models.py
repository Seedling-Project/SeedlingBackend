from django.db import models


from wagtail.fields import StreamField
from wagtail.models import Page
from wagtail import blocks
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

class StandardPage(Page):
    subtitle = models.CharField(max_length=250)
    body = StreamField([
        ('heading', blocks.CharBlock(form_classname="title")),
        ('paragraph', blocks.RichTextBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        FieldPanel('body'),
    ]

    api_fields = [
        'subtitle',
        'body',
    ]

class documentPage(Page):
    subtitle = models.CharField(max_length=250)
    author = models.CharField(max_length=250)
    date = models.DateField("Post date")
    body = StreamField([
        ('heading', blocks.CharBlock(form_classname="title")),
        ('paragraph', blocks.RichTextBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        FieldPanel('author'),
        FieldPanel('date'),
        FieldPanel('body'),
    ]

    api_fields = [
        'subtitle',
        'author',
        'date',
        'body',
    ]
    