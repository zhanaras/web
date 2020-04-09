import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { Product } from '../product';
import { CategoryService } from '../category.service';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  categs = Categories;
  prods: Product[];

  constructor(private categoryService: CategoryService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.categoryService.getProduct().subscribe(prods => this.prods = prods);
  }

  addToCart(product)  {
    this.cartService.addToCart(product);
    window.alert('this serving has been added to the cart');
  }
}
