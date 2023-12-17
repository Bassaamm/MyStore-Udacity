import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../types/CartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input()
  item!: CartItem;
  @Output() IncresItem = new EventEmitter<CartItem>();
  @Output() DecresItem = new EventEmitter<CartItem>();

  constructor() {}
  incresQuan(item: CartItem) {
    this.IncresItem.emit(item);
  }
  decresQuan(item: CartItem) {
    this.DecresItem.emit(item);
  }
}
