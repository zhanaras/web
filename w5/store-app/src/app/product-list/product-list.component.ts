import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { products } from '../products';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products = products;

  share() {
    window.open('https://telegram.me/share/url?url={{product.link}}&text=Смотри, что я нашла на алике!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}