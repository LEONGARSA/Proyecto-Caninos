from django.db import models

class User(models.Model):
    Nombre = models.CharField(max_length=50)
    Correo = models.CharField(max_length=50)
    Contraseña = models.CharField(max_length=50)

    def __str__(self):
        return self.Nombre
