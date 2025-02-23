import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './categories/category-list.component';
import { ProductListComponent } from './products/product-list.component';
import { Category } from './shared/category.model';
import { Product } from './shared/product.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryListComponent, ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: Category | null = null;
  products: Product[] = [];

  selectCategory(category: Category) {
    const categoryProducts = this.products.filter(p => p.category === category.name);
    this.selectedCategory = { ...category, products: categoryProducts };
  }
  
}
