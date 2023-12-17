import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../types/CartItem';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports: [CommonModule, CartItemComponent, FormComponent],
})
export class CartComponent {
  cartList: CartItem[] = [];

  constructor(private CartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartList = this.CartService.getCart();
  }

  handleIncresQuan(item: CartItem) {
    if (item.quantity < 5) {
      item.quantity!++;
      console.log(this.cartList);
    } else alert("You can't add more than 5");
    this.CartService.updateCart(this.cartList);
  }
  handleDecresQuan(item: CartItem) {
    if (item.quantity! > 1) {
      item.quantity!--;
      this.CartService.updateCart(this.cartList);
    } else if (item.quantity! == 1) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.product.name != item.product.name
      );
      this.CartService.updateCart(this.cartList);
      alert('Item was deleted');
    }
  }
  navToCheckout(): void {
    this.router.navigate(['conformation']);
  }
  getTotalPrice(): number {
    return this.CartService.getTotalPrice();
  }
}
