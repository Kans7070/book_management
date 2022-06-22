from django.shortcuts import render
from rest_framework.views import APIView

from apps.books.api.serializer import BooksSerializer
from .models import Books
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class BooksView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                book = Books.objects.get(pk=pk)
                book_serializer = BooksSerializer(book)
                return Response(book_serializer.data, status=status.HTTP_200_OK)
            except:
                return Response('book not found', status=status.HTTP_404_NOT_FOUND)
        books = Books.objects.all()
        books_serializer = BooksSerializer(books, many=True)
        return Response(books_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BooksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.validated_data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def put(self, request,pk=None):
        if pk:
            book = Books.objects.get(id=pk)
            book_serializer = BooksSerializer(book, data=request.data)
            if book_serializer.is_valid():
                book_serializer.save()
                return Response(book_serializer.data,status=status.HTTP_202_ACCEPTED)
            else:
                return Response(book_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        return Response('id not found un url',status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request,pk=None):
        if pk:
            book = Books.objects.get(id=pk)
            book.delete()
            return Response('deleted',status=status.HTTP_200_OK)
        return Response('id not found un url',status=status.HTTP_404_NOT_FOUND)