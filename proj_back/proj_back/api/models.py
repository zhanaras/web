from django.db import models


class Category(models.Model):
    name=models.CharField(max_length=200)
    def to_json(self):
        return{
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(max_length=200)
    image = models.ImageField()
    description = models.TextField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def to_json(self):
        return {
                'id': self.id,
                'name': self.name,
                'price': self.price,
                'image': self.image,
                'description': self.description,
                'category': self.category
            }
