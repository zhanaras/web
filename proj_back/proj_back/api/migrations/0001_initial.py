# Generated by Django 3.0.5 on 2020-04-23 22:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.FloatField(max_length=200)),
                ('image', models.ImageField(upload_to='')),
                ('description', models.TextField(max_length=200)),
                ('category', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.Category')),
            ],
        ),
    ]