import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../category.service';
import { ProductsServiceService } from '../products-service.service';
import { products } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoriesWithProducts: any;

  constructor(public productsService: ProductsServiceService,
    private route: ActivatedRoute,) {}

  ngOnInit() : void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProductsList().subscribe(products => this.categoriesWithProducts = products)
  }
}
