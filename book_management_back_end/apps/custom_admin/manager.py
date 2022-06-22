from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, name, email, password):
        if not name:
            raise ValueError('name must be provided')

        if not email:
            raise ValueError('email must be provided')

        if not password:
            raise ValueError('password must be provided')
        
        user=self.model(
            name=name,
            email=email,
        )
        user.is_staff = False
        user.set_password(password)
        user.save()
    
    def create_superuser(self, name, email, password):
        if not name:
            raise ValueError('name must be provided')

        if not email:
            raise ValueError('email must be provided')

        if not password:
            raise ValueError('password must be provided')
        
        user=self.model(
            name=name,
            email=email,
        )
        user.is_staff = True
        user.set_password(password)
        user.save()