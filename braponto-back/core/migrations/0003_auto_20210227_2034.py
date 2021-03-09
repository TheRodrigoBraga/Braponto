# Generated by Django 3.1.7 on 2021-02-27 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20210223_2124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funcionario',
            name='cargo',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='cpf',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='data_admissao',
            field=models.DateField(blank=True, null=True),
        ),
    ]
