import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  orderItems: { product: Product, quantity: number }[] = [];
  total: number = 0;
  isOrderConfirmed: boolean = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.orderItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.orderItems.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
  }

  confirmOrder(): void {
    this.cartService.clearCart(); 
    this.isOrderConfirmed = true; 
  }

  getTotalAmount(): number {
    return this.total;
  }
}
