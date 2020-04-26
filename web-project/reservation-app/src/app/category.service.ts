import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category, Product} from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL  = 'http://localhost:7000';

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getProducts(id): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products/`);
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }
}
