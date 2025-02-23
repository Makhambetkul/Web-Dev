import { Component } from '@angular/core';
import { CategoryListComponent } from './categories/category-list.component';
import { ProductListComponent } from './products/product-list.component';
import { Category } from './shared/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryListComponent, ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
