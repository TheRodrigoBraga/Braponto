from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import FuncionarioViewSet
from core.views import RegistroViewSet

router = routers.DefaultRouter()
router.register(r'funcionarios', FuncionarioViewSet)
router.register(r'registros', RegistroViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
