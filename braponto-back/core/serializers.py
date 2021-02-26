from rest_framework import serializers
from .models import Funcionario

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'matricula', 'nome', 'cpf', 'cargo', 'data_admissao']

class FuncionarioSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'matricula', 'nome']