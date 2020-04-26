from rest_framework import serializers
from .models import Category, Product, Person, Reservation, Manager


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class PersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = ('id', 'username', 'name', 'phone', 'password', )


class ProductSerializer(serializers.ModelSerializer):
    category= CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'image',  'category', 'category_id', )


class CategoryWithProductsSerializer(serializers.ModelSerializer):

    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'products')


class ReservationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    person = PersonSerializer(read_only=True)
    person_id = serializers.IntegerField(write_only=True)
    products = ProductSerializer(read_only=True, many=True)
    product_id = serializers.IntegerField(write_only=True),
    date = serializers.DateTimeField()

    def create(self, validated_data):
        return Reservation.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.person_id = validated_data.get('person_id', instance.person_id)
        instance.date = validated_data.get('date', instance.date)
        instance.save()
        return instance


class ManagerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    name = serializers.CharField()
    address = serializers.CharField()
    phone = serializers.IntegerField()
    email = serializers.EmailField()
    age = serializers.IntegerField()
    gender = serializers.CharField()
    salary = serializers.FloatField()

class OrderSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    phone = serializers.IntegerField()
    date = serializers.DateTimeField()

    def create(self, validated_data):
        return Reservation.objects.create(**validated_data)

