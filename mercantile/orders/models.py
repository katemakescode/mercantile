from django.db import models


class Order(models.Model):
    date_ordered = models.DateTimeField(auto_now_add=True)
    date_shipped = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ('-date_ordered',)

    def __str__(self):
        return self.date_ordered


class OrderLine(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    book_id = models.CharField(max_length=20)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.book_id
