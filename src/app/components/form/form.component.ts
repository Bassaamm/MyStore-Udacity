import { OrdersService } from './../../services/orders.service';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../types/CartItem';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  fullName: string = '';
  address: string = '';
  creditCard!: number;

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
}
