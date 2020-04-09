import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../categories';
import { Products } from '../products';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, ) { }
  categories = Categories;

  ngOnInit(): void {
  }

}
