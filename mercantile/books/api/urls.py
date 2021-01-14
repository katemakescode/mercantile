from django.urls import path
from . import views

app_name = 'books'
urlpatterns = [
    path('books/', views.BookListView.as_view(), name='book_list'),
    path('books/<pk>/', views.BookDetailView.as_view(), name='book_detail'),
    path('book/', views.BookCreateView.as_view(), name='book_create'),
]
