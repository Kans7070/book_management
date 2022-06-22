from rest_framework import serializers
from apps.books.models import Books



class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model=Books
        fields=['id','title','author','description']
        read_only_field=['id']
    
 