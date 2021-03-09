# Generated by Django 3.1.7 on 2021-03-03 00:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20210227_2034'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dia', models.DateField(auto_now_add=True)),
                ('primeiro_registro', models.TimeField()),
                ('segundo_registro', models.TimeField()),
                ('terceiro_registro', models.TimeField()),
                ('quarto_registro', models.TimeField()),
                ('funcionario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.funcionario')),
            ],
        ),
    ]
