import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { categories } from './mock-categories'

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  productWeNeed: any;
  products = categories;

  constructor() { }

  getProductsList(): Observable<any> {
    return of(this.products);
  }

  getProductById(id): Observable<any> {
    const res = "";
    const ALL_PRODUCTS = this.products.map(category => category.products).reduce((a, b) => a.concat(b));
    this.productWeNeed = ALL_PRODUCTS.find((category: any) => category.id === id)
    console.log(this.productWeNeed);
    return of(this.productWeNeed);
  }
}
