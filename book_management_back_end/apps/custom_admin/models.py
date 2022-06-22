from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .manager import UserManager


# Create your models here.




class User(AbstractBaseUser):
    name = models.CharField(max_length=50,null=True,blank=True)
    email = models.EmailField(max_length=50,unique=True,null=False,blank=False)
    is_staff = models.BooleanField(default=False,null=False,blank=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name',]

    objects = UserManager()

    def _str_(self):
        return self.name
