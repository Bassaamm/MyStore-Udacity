import { Injectable } from '@angular/core';
import { Order } from '../types/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[] = [];
  constructor() {}
  addOrder(order: Order) {
    this.orders.push(order);
  }
}
