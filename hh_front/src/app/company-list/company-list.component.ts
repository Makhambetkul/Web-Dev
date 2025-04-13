import {Company, Vacancy} from '../models';
import {CompanyService} from '../company.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-company-list',
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies: Company[]=[];
  selectedVacancies: Vacancy[]=[];

  constructor(private companyService: CompanyService){}

  ngOnInit(): void{
    this.companyService.getCompanies().subscribe((data)=>{
      this.companies=data;
    });
  }

  loadVacancies(companyId: number): void{
    this.companyService.getCompanyVacancies(companyId).subscribe((data)=>{
      this.selectedVacancies=data;
    });
  }

}
