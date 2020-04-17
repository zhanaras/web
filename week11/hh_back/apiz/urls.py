from django.urls import path
from apiz.views_old import company_list, company_detail, \
    company_vacancies, VacancyListAPIView, VacancyDetailAPIView, VacancyTopTenAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns=[
    path('login/', obtain_jwt_token),
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', VacancyTopTenAPIView.as_view())
]