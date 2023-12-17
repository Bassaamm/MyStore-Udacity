import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/Product';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: Product;
  selectedQuantity!: number;
  qunitity: number[] = Array(5)
    .fill(0)
    .map((x, i) => i + 1);
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private CartService: CartService
  ) {
    this.selectedQuantity = 1;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(Number(id))
      .subscribe((item) => (this.product = item));
    console.log(this.qunitity);
  }
  AddToCart() {
    this.CartService.addToCart({
      product: this.product,
      quantity: this.selectedQuantity,
    });
  }
}
