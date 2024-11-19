from django.db import models

class User(models.Model):
    
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    confirmPassword = models.CharField(max_length=128)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    registrationDate = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username
