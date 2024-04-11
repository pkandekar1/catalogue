import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product, quantity: number }[] = [];

  constructor() { }

  addToCart(product: Product): void {
    const existingProductIndex = this.cart.findIndex(item => item.product.name === product.name);
    if (existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Product): void {
    const index = this.cart.findIndex(item => item.product.name === product.name);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  updateQuantity(product: Product, quantity: number): void {
    const index = this.cart.findIndex(item => item.product.name === product.name);
    if (index !== -1) {
      this.cart[index].quantity = quantity;
    }
  }

  getCart(): { product: Product, quantity: number }[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
