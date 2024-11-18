from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from ecomerce import views



router = routers.DefaultRouter()
router.register(r'ecomerce', views.EcomerceView, 'ecomerce')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    #http://localhost:8000/ecomerce/api/v1/ecomerce/ 
    path('docs/', include_docs_urls(title="ecomerce API"))
    #http://localhost:8000/ecomerce/docs/

]