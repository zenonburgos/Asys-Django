# Generated by Django 4.0.3 on 2022-04-14 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inv', '0009_alter_categoria_estado_alter_marca_estado_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categoria',
            name='estado',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='marca',
            name='estado',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='estado',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='subcategoria',
            name='estado',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='unidadmedida',
            name='estado',
            field=models.BooleanField(default=True),
        ),
    ]
