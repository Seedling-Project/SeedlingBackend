from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel

class StandardPage(Page):
    subtitle = models.CharField(max_length=250)
    # next, add the body, a rich text inside of a streamfield
    body = RichTextField()

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        FieldPanel('body'),
    ]