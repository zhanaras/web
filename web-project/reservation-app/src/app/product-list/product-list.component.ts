import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models';
import { CartService } from '../cart.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private categoryService: CategoryService ) { }

    addToCart(product)  {
      this.cartService.addToCart(product);
      window.alert('this serving has been added to the cart');
    }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.categoryService.getProductList().subscribe(products => {this.products = products; });
  }
}
