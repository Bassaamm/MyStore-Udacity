import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './page/products/products.component';
import { CartComponent } from './page/cart/cart.component';
import { ConformationComponent } from './page/conformation/conformation.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';

export const routes: Routes = [
  { path: '**', redirectTo: '' },
  { path: '', component: ProductsComponent },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'conformation',
    component: ConformationComponent,
  },
];
