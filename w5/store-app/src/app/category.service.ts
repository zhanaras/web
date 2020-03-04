import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categories } from './mock-categories';
import { CategoryComponent } from './category/category.component';
import { categ, item } from './inter';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  cats3: categ;
  cats4: categ[];

  constructor(private cc: CategoryComponent) { }

  getCategory(id: number): Observable<any> {
    this.cats4 = this.cc.getThisCategs();
    return of(this.cats4.find(x => x.id == id));
  }

  getCategories(): Observable<any> {
    return of(this.cc.getThisCategs);
  }

  getProducts(id: number, id2: number): Observable<item>{
    const cat = this.cc.getThisCategs().find(x => x.id == id2);
    return of(cat.products.find(x => x.id == id));
  }
}