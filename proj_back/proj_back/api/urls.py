from django.urls import path
from api.views.views_fbv import category_list, category_detail #, product_list,product_detail,category_products
from api.views.views_cbv import ProductListAPIView, ProductDetailAPIView, CategoryProductsAPIView
#urlpatterns = [
 #   path('categories/',category_list),
  #  path('categories/<int:category_id>',category_detail),
   # path('categories/<int:category_id>/products',category_products),
    #path('products/',product_list),
    #path('products/<int:product_id>/',product_detail),
    #]
urlpatterns = [
    #path('login/', obtain_jwt_token),
    path('categories/', category_list),
    path('companies/<int:category_id>/', category_detail),
    #path('companies/',companies_list),
    #path('companies/<int:company_id>',company_detail),
    path('categories/<int:category_id>/products',CategoryProductsAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/',ProductDetailAPIView.as_view()),
    #path('vacancies/',vacancy_list),
    #path('vacancies/<int:vacancy_id>/',vacancy_detail),
    #path('vacancies/top_ten',get_top_vacancies),
    ]