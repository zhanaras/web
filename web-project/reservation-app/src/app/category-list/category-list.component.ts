import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = Categories;
  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }
}
