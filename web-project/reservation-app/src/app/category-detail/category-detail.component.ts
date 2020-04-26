import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoryService } from '../category.service';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  categs = Categories;
  prods: Product[] = [];

  constructor(private categoryService: CategoryService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getProducts(id).subscribe(prods => {this.prods = prods; });
  }

  addToCart(product)  {
    this.cartService.addToCart(product);
    window.alert('this serving has been added to the cart');
  }
}
