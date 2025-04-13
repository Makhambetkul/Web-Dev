import { Component } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CompanyListComponent],
  standalone: true,
  template: `
  <app-company-list></app-company-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh_front';
}
