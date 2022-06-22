from rest_framework import serializers
from apps.custom_admin.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['email','password']
        extrakwargs = {'password': {'write_only': True}}
    
 