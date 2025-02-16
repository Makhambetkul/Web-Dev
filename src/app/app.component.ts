import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], 
  template: `<h1>Angular работает</h1> <app-products></app-products>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  constructor() {
    console.log('AppComponent загружен');
  }
}
