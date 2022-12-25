import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { NotificationService } from 'src/app/services/notificiation/notification.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ICartProducts, IProducts } from 'src/app/types/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: IProducts | undefined;
  id: any;
  amount = 1;
  maxToBuy: any;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService,
    private cartService: CartService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  ngOnInit() {
    this.productDetails = this.productsService.getProductById(Number(this.id));
    this.maxToBuy = this.productDetails?.stock;
  }

  addToCart = () => {
    this.notification.notified('O produto foi adicionado ao carrinho');
    const product: ICartProducts = {
      ...this.productDetails!,
      qty: this.amount,
    };
    this.cartService.addItemToCart(product);
  };
}
