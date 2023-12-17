import { Router } from '@angular/router';
import { Order } from '../../types/order';
import { OrdersService } from './../../services/orders.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conformation',
  standalone: true,
  imports: [],
  templateUrl: './conformation.component.html',
  styleUrl: './conformation.component.css',
})
export class ConformationComponent {
  order = {} as Order;

  constructor(private OrdersService: OrdersService, private router: Router) {}

  ngOnInit() {
    this.order =
      this.OrdersService.orders[this.OrdersService.orders.length - 1];
  }
  navToProducts(): void {
    this.router.navigate(['']);
  }
}
