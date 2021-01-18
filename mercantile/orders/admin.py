from django.contrib import admin

from .models import Order, OrderLine


class OrderLineInline(admin.TabularInline):
    model = OrderLine


class OrderAdmin(admin.ModelAdmin):
    model = Order
    inlines = [OrderLineInline]


admin.site.register(Order, OrderAdmin)

