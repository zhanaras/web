import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginResponse, Reservation, Person, Product, Order } from './models';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  BASE_URL = 'http://localhost:7000';
  currentUser: Person;
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  register(username, name, phone, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/users/`, {
      username,
      name,
      phone,
      password
    });
  }

  makeRes(name, phone, date): Observable<Order> {
    return this.http.post<Order>(`${this.BASE_URL}/api/orders/`, {
      name,
      phone,
      date
    });
}
}
