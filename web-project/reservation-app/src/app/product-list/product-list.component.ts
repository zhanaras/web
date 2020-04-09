import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = Products;

  constructor(private route: ActivatedRoute,
              private cartService: CartService ) { }

    addToCart(product)  {
      this.cartService.addToCart(product);
      window.alert('this serving has been added to the cart');
    }

  ngOnInit(): void {
  }

}
