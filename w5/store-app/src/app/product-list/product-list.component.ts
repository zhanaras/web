import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { products } from '../products';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(private route: ActivatedRoute, private productsService: ProductsServiceService, ) { }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProductById(id).subscribe(item => this.products = item)
  }


  share() {
    window.open('https://telegram.me/share/url?url={{product.link}}&text=Смотри, что я нашла на алике!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}