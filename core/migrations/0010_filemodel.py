# Generated by Django 4.2.9 on 2024-02-04 00:46

import SeedlingProject.storage_backends
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0009_alter_documentpage_body"),
    ]

    operations = [
        migrations.CreateModel(
            name="FileModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "file",
                    models.FileField(
                        storage=SeedlingProject.storage_backends.PrivateMediaStorage(),
                        upload_to="",
                    ),
                ),
            ],
        ),
    ]
