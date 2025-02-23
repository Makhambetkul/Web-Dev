import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  currentImageIndex = 0;

  likeProduct() {
    this.product.likes++;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }
}
