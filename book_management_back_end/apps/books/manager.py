from django.db import models


class BookManager(models.Manager):
    def create(self, title, author, description):
        if not title:
            raise ValueError("title required")
        if not author:
            raise ValueError("author required")
        if not description:
            raise ValueError("description: required")
        book = self.model(
            title=title, 
            author=author, 
            description=description
        )
        book.save()
        return book