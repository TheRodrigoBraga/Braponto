from django.db import models


class Funcionario(models.Model):
    matricula = models.IntegerField()
    nome = models.CharField(max_length=255)
    cpf = models.IntegerField()
    data_admissao = models.DateField()
    cargo = models.CharField(max_length=100)

    def __str__(self):
        return self.id + str(self.matricula) + " " + self.nome