from django.shortcuts import render
from django.http.response import JsonResponse
from apiz.models import Company, Vacancies

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json()  for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        return JsonResponse(company.to_json())

def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    vacancies = company.vacancies.all()
    vacancies_json = [v.to_json() for v in vacancies]

    return JsonResponse(vacancies_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancies.objects.all()
    vacancies_json = [vac.to_json() for vac in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancies.objects.get(id=vacancy_id)
    except Vacancies.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == "GET":
        return JsonResponse(vacancy.to_json())

def top_ten(request):
    ordered_vacancies = Vacancies.objects.order_by('-salary')[:10]
    ord_vac_json = [o.to_json() for o in ordered_vacancies]
    return JsonResponse(ord_vac_json, safe=False)
# Create your views here.
