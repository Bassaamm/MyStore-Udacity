import { Router } from '@angular/router';
import { Product } from '../../types/Product';
import { CartService } from '../../services/cart.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../types/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartList: CartItem[] = [];

  constructor(private CartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartList = this.CartService.getCart();
  }

  incresQuan(item: CartItem) {
    if (item.quantity < 5) {
      item.quantity!++;
      console.log(this.cartList);
    } else alert("You can't add more than 5");
    this.CartService.updateCart(this.cartList);
  }
  decresQuan(item: CartItem) {
    if (item.quantity! > 1) {
      item.quantity!--;
      this.CartService.updateCart(this.cartList);
    } else if (item.quantity! == 1) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.product.name != item.product.name
      );
      this.CartService.updateCart(this.cartList);
    }
  }
  navToCheckout() {
    this.router.navigate(['conformation']);
  }
}
