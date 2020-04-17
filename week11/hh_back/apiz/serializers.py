from rest_framework import serializers

from apiz.models import Vacancies

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

class CompVacanciesSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()

class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = Vacancies
        fields = ('id', 'name', 'description', 'salary',)

