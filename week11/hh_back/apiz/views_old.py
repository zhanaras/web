from django.shortcuts import render
from django.http.response import JsonResponse
from apiz.models import Company, Vacancies
from apiz.serializers import CompanySerializer, VacancySerializer


from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins


@api_view(['GET'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)


@api_view(['GET'])
def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyListAPIView(mixins.ListModelMixin,
                         generics.GenericAPIView):
    queryset = Vacancies.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class VacancyDetailAPIView(generics.RetrieveDestroyAPIView):
    queryset = Vacancies.objects.all()
    serializer_class = VacancySerializer


class VacancyTopTenAPIView(mixins.ListModelMixin,
                           generics.GenericAPIView):
    queryset = Vacancies.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
# Create your views here.
