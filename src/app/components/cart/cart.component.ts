import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { NotificationService } from 'src/app/services/notificiation/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  amount!: number;

  constructor(
    public cartService: CartService,
    public notificationService: NotificationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getTotalPrice();
  }

  getTotalPrice = () => {
    this.totalPrice = this.cartService.BuyList.reduce(
      (prev, current) => prev + current.qty * current.price,
      0
    );
  };

  deleteItem = (id: number) => {
    this.cartService.deleteItem(id);
    this.getTotalPrice();
  };

  transactionCompleted = () => {
    this.notificationService.notified('Sua compra foi concluída');
    this.cartService.clearCart();
    this.router.navigate(['']);
  };
}
