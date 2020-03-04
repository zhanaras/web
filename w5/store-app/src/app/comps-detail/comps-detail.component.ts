import { Component, OnInit } from '@angular/core';
import { item } from '../inter';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comps-detail',
  templateUrl: './comps-detail.component.html',
  styleUrls: ['./comps-detail.component.css']
})
export class CompsDetailComponent implements OnInit {

  products: item;

  constructor(private route: ActivatedRoute,
    private service1: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(): void{
    const id = +this.route.snapshot.paramMap.get('id2');
    const id2 = +this.route.snapshot.paramMap.get('id1');
    this.service1.getProducts(id, id2).subscribe(categories => this.products = categories );
  }

  getBack(): void{
    this.location.back();
  }

}
