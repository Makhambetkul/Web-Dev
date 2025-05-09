import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company, Vacancy} from './models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL='http://127.0.0.1:8000/api/companies/'

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(this.BASE_URL);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}${companyId}/vacancies/`);
  }
}
