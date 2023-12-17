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
  addToCart(item: CartItem): void {
    const doesItemExist = this.cart.find(
      (items) => items.product.id == item.product.id
    );
    console.log(doesItemExist);
    if (!doesItemExist) {
      console.log(doesItemExist);
      this.cart.push(item);
      alert('item been added to the cart !');
    } else {
      alert('item already been added to the cart !');
    }
  }
  getTotalPrice(): number {
    return this.cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }
  clearCart(): void {
    this.cart.length = 0;
  }
}
