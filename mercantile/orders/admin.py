from django.contrib import admin

from .models import Order, OrderLine


class OrderLineInline(admin.TabularInline):
    model = OrderLine


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'date_ordered', 'date_shipped']
    inlines = [OrderLineInline]
