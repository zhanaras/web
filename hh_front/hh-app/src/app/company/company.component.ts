import { Component, OnInit } from '@angular/core';
import { GetCompaniesService } from '../get-companies.service';
import { Company } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];

  constructor(public companyService: GetCompaniesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompanyLis();
  }

  getCompanyLis() {
    this.companyService.getCompanyList().subscribe(companies => {this.companies = companies; });
  }

}
