import { OrdersService } from './../../services/orders.service';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../types/CartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  fullName: string = '';
  address: string = '';
  creditCard!: number;
  creditCardError: string | undefined;
  fullNameError: string | undefined;
  constructor(
    private OrdersService: OrdersService,
    private router: Router,
    private CartService: CartService
  ) {}

  navToConformtion() {
    console.log(this.fullName, this.address, this.creditCard);
    this.OrdersService.addOrder({
      items: this.CartService.cart,
      totalPrice: Number(this.CartService.getTotalPrice()),
      customer: {
        fullName: this.fullName,
        address: this.address,
        creditCart: this.creditCard,
      },
    });
    this.CartService.clearCart();
    this.router.navigate(['conformation']);
  }
  validateCreditCard() {
    if (
      this.creditCard.toString().length !== 20 ||
      /\D/.test(this.creditCard.toString())
    ) {
      this.creditCardError = 'Credit card number must be exactly 20 digits.';
    } else {
      this.creditCardError = undefined;
    }
  }
  validateFullName() {
    if (/[^a-zA-Z]/.test(this.fullName)) {
      this.fullNameError = 'Name must be provided right, Like the example';
    } else {
      this.fullNameError = undefined;
    }
  }
}
