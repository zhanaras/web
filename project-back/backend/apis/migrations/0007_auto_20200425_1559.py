# Generated by Django 3.0.5 on 2020-04-25 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0006_manager'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='manager',
            name='user',
        ),
        migrations.RemoveField(
            model_name='person',
            name='user',
        ),
        migrations.AddField(
            model_name='manager',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='manager',
            name='name',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='manager',
            name='password',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='manager',
            name='username',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='person',
            name='name',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='person',
            name='password',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='person',
            name='username',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
