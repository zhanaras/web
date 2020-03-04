import { Component, OnInit, Input } from '@angular/core';
import { categ } from '../inter';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comps',
  templateUrl: './comps.component.html',
  styleUrls: ['./comps.component.css']
})
export class CompsComponent implements OnInit {

  @Input() public c: categ;
  categs: categ;

  constructor(private route: ActivatedRoute,
    private service1: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.service1.getCategory(id).subscribe(categories => this.categs = categories);
  }

  getBack(): void{
    this.location.back();
  }

}
