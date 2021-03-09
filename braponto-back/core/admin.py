from django.contrib import admin
from .models import Funcionario
from .models import Registro

admin.site.register(Funcionario)
admin.site.register(Registro)