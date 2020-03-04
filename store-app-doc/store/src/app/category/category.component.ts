import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-categories';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService: CategoryService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  onSelect(category: Category): void{
    this.selectedCategory = category;
    this.messageService.add(`MessageService: Selected category is =${category.id}`);
  }

}
