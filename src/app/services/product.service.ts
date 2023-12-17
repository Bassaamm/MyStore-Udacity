import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const product = this.http.get<Product[]>('assets/data.json');
    return product;
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>('assets/data.json').pipe(
      map((products) => {
        const product = products.find((product) => product.id === id);
        if (!product) {
          throw new Error(`Product with id ${id} does not exist`);
        }
        return product;
      })
    );
  }
}
