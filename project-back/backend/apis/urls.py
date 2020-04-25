from django.urls import path
from django.conf.urls import url
from .views import ProductListAPIView, UsersListAPIView, category_list, \
    category_detail, CategoryProductsAPIView, ProductDetailAPIView, reservation, reservation_detail
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_detail),
    path('categories/<int:category_id>/products', CategoryProductsAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('reservations/', reservation),
    path('reservations/<int:res_id>/', reservation_detail),
    path('login/', obtain_jwt_token),
    path('login/verify/', verify_jwt_token),
    path('users/', UsersListAPIView.as_view()),
]