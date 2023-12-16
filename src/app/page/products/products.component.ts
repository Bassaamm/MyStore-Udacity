import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../types/Product';
import { ProductService } from '../../services/product.service';
import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CartItem } from '../../types/CartItem';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: Product[] = [];
  constructor(
    private ProductService: ProductService,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((res) => {
      this.productList = res;
    });
  }
  handleAddToCart(item: CartItem): void {
    this.CartService.addToCart(item);
  }
}
