import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../types/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../types/CartItem';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<CartItem>();
  qunitity: number[] = Array(5)
    .fill(0)
    .map((x, i) => i + 1);
  selectedQuantity!: number;

  constructor(private router: Router) {
    this.selectedQuantity = 1;
    this.product = {
      id: null ?? 0,
      name: '',
      description: '',
      price: 0,
      url: 'https://placehold.co/600x400',
      quantity: 0,
    };
  }
  onAddToCart(): void {
    console.log(this.product, this.selectedQuantity);
    this.addToCart.emit({
      product: this.product,
      quantity: this.selectedQuantity,
    });
  }
  navToProduct() {
    this.router.navigate(['product/:id']);
  }
}
