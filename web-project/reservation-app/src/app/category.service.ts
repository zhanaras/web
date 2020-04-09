import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getProduct(): Observable<Product[]>{
    return of(Products);
  }
}
