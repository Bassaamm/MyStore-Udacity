import { Injectable } from '@angular/core';
import { CartItem } from '../types/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[];
  constructor() {
    this.cart = [];
  }
  getCart(): CartItem[] {
    return this.cart;
  }
  updateCart(updatedCart: CartItem[]): CartItem[] {
    return (this.cart = updatedCart);
  }
  addToCart(product: CartItem): void {
    this.cart.push(product);
  }
}
