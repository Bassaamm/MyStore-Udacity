import { CommonModule } from '@angular/common';
import { Product } from '../types/Product';
import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  qunitity: number[] = Array(5)
    .fill(0)
    .map((x, i) => i + 1);

  productList: Product[] = [];
  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((res) => {
      console.log(res);
      this.productList = res;
    });
  }

  navToProduct() {
    this.router.navigate(['product/:id']);
  }
}
