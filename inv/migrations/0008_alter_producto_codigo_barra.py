# Generated by Django 4.0.3 on 2022-04-14 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inv', '0007_alter_producto_marca_alter_producto_modelo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='codigo_barra',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
