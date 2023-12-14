import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    const product = this.http.get<Product[]>('assets/data.json');
    return product;
  }
}
