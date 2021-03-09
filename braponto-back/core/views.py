from django.shortcuts import render
from rest_framework import viewsets
from .models import Funcionario
from .models import Registro
from .serializers import FuncionarioSerializer, FuncionarioSimpleSerializer
from .serializers import RegistroSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated

class FuncionarioViewSet(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, ]

    def list(self, request, *args, **kwargs):
        queryset = Funcionario.objects.all()
        serializer = FuncionarioSimpleSerializer(queryset, many=True)
        return Response(serializer.data)

class RegistroViewSet(viewsets.ModelViewSet):
    queryset = Registro.objects.all()
    serializer_class = RegistroSerializer
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, ]

    def list(self, request, *args, **kwargs):
        queryset = Registro.objects.all()
        serializer = RegistroSerializer(queryset, many=True)
        return Response(serializer.data)

