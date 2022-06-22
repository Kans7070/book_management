from django.db import models

from apps.books.manager import BookManager

# Create your models here.

class Books(models.Model):
    title = models.CharField(max_length=60)
    author = models.CharField(max_length=30)
    description = models.CharField(max_length=100)

    objects = BookManager()

    class Meta:
        db_table = 'books'