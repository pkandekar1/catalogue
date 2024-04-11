import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: { product: Product, quantity: number }[] = [];
  total: number = 0;
  isBought: boolean = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  updateQuantity(product: Product, quantity: number): void {
    this.cartService.updateQuantity(product, quantity);
    this.calculateTotal();
  }

  removeProduct(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart(); 
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
  }

  getTotal(): number {
    return this.total;
  }

  buyNow(): void {
    this.isBought = true;
    this.router.navigate(['/confirm-order']);
  }

}
