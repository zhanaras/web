import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    public categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(categories => {this.categories = categories; });
  }
}
