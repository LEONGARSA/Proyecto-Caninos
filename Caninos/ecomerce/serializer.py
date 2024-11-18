from rest_framework import serializers
from.models import User

class ecomerceSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #fields = ('id', 'Nombre', 'Correo', 'Contraseña')
        fields = '__all__'