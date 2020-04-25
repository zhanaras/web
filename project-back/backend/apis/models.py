from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
import jwt
from datetime import timedelta
from django.conf import settings
from django.db import models
from django.core import validators
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin


class Category(models.Model):
    name = models.CharField(max_length=200)


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(max_length=200)
    image = models.ImageField(null=True)
    description = models.TextField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')


class Person(models.Model):
    username = models.CharField(max_length=250, blank=False, null=True, unique=True)
    name = models.CharField(max_length=250, blank=False, null=True)
    phone = models.IntegerField()
    password = models.CharField(max_length=250, blank=False, null=True)


class Reservation(models.Model):
    products = models.ManyToManyField(Product)
    date = models.DateTimeField()
    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='reservation')


class Manager(models.Model):
    username = models.CharField(max_length=250, blank=False, null=True, unique=True)
    name = models.CharField(max_length=250, blank=False, null=True)
    address = models.CharField(max_length=250)
    phone = models.IntegerField()
    email = models.EmailField()
    age = models.IntegerField()
    gender = models.CharField(max_length=50)
    salary = models.FloatField()