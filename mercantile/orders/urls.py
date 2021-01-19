from django.urls import path
from . import views

urlpatterns = [
    path('', views.orders, name='list'),
    path('<int:order_id>/', views.order, name='detail'),
]
