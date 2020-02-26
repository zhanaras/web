import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { categories } from './mock-categories'

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  products = categories;

  constructor() { }

  getProductsList(): Observable<any> {
    return of(this.products);
  }

  getProductById(id): Observable<any> {
    const ALL_PRODUCTS = this.products.map(category => category.products).reduce((a, b) => a.concat(b));
    const productWeNeed = ALL_PRODUCTS.find((product: any) => product.id === id)
    return of(productWeNeed);
  }
}
