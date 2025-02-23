import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[] = [
    { name: 'Электроника', products: [] },
    { name: 'Для дома', products: [] },
    { name: 'Одежда', products: [] },
    { name: 'Игрушки', products: [] }
  ];

  @Output() categorySelected = new EventEmitter<Category>();

  selectCategory(category: Category) {
    this.categorySelected.emit(category);
  }
}
