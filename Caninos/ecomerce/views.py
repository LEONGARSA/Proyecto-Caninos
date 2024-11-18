
from rest_framework import viewsets
from.serializer import ecomerceSerializer
from.models import User

class EcomerceView(viewsets.ModelViewSet):
    serializer_class = ecomerceSerializer
    queryset= User.objects.all()
