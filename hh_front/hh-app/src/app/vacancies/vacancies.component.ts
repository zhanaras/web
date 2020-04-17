import { Component, OnInit } from '@angular/core';
import { GetCompaniesService } from '../get-companies.service';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private companyService: GetCompaniesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getVacancies(id).subscribe(vacancies => {this.vacancies = vacancies; });
  }

}
