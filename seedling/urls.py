from django.urls import path

from seedling import views

urlpatterns = [path("seedling/", views.display, name="display")]
