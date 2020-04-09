import { Component, OnInit } from '@angular/core';
import { places } from '../places' ;
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  places = places;
  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }

}
