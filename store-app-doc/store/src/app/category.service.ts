import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-categories';
import { MessageService } from './message.service';
import { products } from './products'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private messageService: MessageService) { }

  getCategories(): Observable<Category[]> {
    this.messageService.add('CategoryService: fetcehd categories');
    return of(CATEGORIES);
  }
}
