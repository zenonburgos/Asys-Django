# Generated by Django 4.0.3 on 2022-04-14 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inv', '0011_alter_producto_afecta'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='afecta',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='formatos',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='producto',
            name='listapre',
            field=models.BooleanField(default=False),
        ),
    ]
