import { Component, OnInit } from '@angular/core';
import { categories } from '../mock-categories';
import { products } from '../products';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  categories = categories;
  products = products;
  ngOnInit(): void {
  }

}
