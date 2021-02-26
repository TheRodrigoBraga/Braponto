# Generated by Django 3.1.7 on 2021-02-24 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Funcionarios',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('matricula', models.IntegerField()),
                ('nome', models.CharField(max_length=255)),
                ('cpf', models.IntegerField()),
                ('data_admissao', models.DateField()),
                ('cargo', models.CharField(max_length=100)),
            ],
        ),
    ]
