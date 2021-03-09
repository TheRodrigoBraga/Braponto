from django.db import models

class Funcionario(models.Model):
    matricula = models.IntegerField(unique=True)
    nome = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id) + str(self.matricula) + " " + self.nome

def zero_hour():
  return '00:00:00'

class Registro(models.Model):
    funcionario = models.ForeignKey(Funcionario, on_delete=models.CASCADE)
    dia = models.DateField(auto_now_add=True)
    primeiro_registro = models.TimeField(default=zero_hour())
    segundo_registro = models.TimeField(default=zero_hour())
    terceiro_registro = models.TimeField(default=zero_hour())
    quarto_registro = models.TimeField(default=zero_hour())

    def __str__(self):
        return str(self.id) + " " + self.funcionario.nome + " " + str(self.dia) + " " + str(self.primeiro_registro) + " " + str(self.segundo_registro)  + " " + str(self.terceiro_registro) + " " + str(self.quarto_registro)