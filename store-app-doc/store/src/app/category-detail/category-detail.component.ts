import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../mock-categories';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category;
  categories = CATEGORIES;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.category = this.categories[+params.get('categoryId')]
    })

  }

  getBack(): void {
    this.location.back();
  }

  addToCart(product){
    window.alert('Your product ha been added to the cart');
    this.cartService.addToCart(product);
  }

}
