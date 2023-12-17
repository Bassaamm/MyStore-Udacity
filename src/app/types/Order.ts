import { CartItem } from './CartItem';
import { Customer } from './Customer';
export type Order = {
  items: CartItem[];
  totalPrice: number;
  customer: Customer;
};
