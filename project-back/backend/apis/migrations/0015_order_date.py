# Generated by Django 3.0.5 on 2020-04-26 15:47

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0014_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
