from django.urls import path
from . import views

app_name = 'orders'
urlpatterns = [
    path('', views.orders, name='list'),
    path('<int:order_id>/', views.order, name='detail'),
]
