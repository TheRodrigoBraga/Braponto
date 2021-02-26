from django.shortcuts import render
from rest_framework import viewsets
from .models import Funcionario
from .serializers import FuncionarioSerializer, FuncionarioSimpleSerializer
from rest_framework.response import Response

class FuncionarioViewSet(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

    def list(self, request, *args, **kwargs):
        queryset = Funcionario.objects.all()
        serializer = FuncionarioSimpleSerializer(queryset, many=True)
        return Response(serializer.data)

