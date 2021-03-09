from rest_framework import serializers
from .models import Funcionario
from .models import Registro

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'matricula', 'nome']

class FuncionarioSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'matricula', 'nome']

class RegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registro
        fields = ['id', 'funcionario', 'dia', 'primeiro_registro', 'segundo_registro', 'terceiro_registro', 'quarto_registro']