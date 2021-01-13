from django.db import models


class Book(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)

    class Meta:
        ordering = ['author', 'title']

    def __str__(self):
        return self.title
