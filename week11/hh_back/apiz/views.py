from django.shortcuts import render
import json
from django.http.response import JsonResponse
from apiz.models import Company, Vacancies
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json()  for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data['name'], description=data['description'], city=data['city'], address=data['address'])
        #company.save()

        return JsonResponse(company.to_json())
# Create your views here.
