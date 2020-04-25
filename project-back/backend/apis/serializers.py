from rest_framework import serializers, authentication
from .models import Category, Product, Person, Reservation


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
        fields = ('id', 'name', 'price', 'description',  'category','category_id')


class CategoryWithProductsSerializer(serializers.ModelSerializer):

    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'products')


class ReservationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    products = ProductSerializer(read_only=True, many=True)
    date = serializers.DateTimeField()
    person = PersonSerializer(read_only=True)



