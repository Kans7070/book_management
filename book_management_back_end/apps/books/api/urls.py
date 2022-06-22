from django.urls import include, path
from apps.books.views import BooksView


urlpatterns = [
    path('books',BooksView.as_view()),
    path('books/<int:pk>',BooksView.as_view()),
]
