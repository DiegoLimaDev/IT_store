import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/types/products';

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
    private notification: NotificationService
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
  };
}
