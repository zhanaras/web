import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  BASE_URL = 'http://localhost:7000';
  items: Product[] = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) { }
}
