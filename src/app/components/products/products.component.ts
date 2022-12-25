import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { IProducts } from 'src/app/types/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: IProducts[] | undefined;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.products = this.productsService.getAll();
  }
  goToDetails = (id: number) => {
    return this.router.navigate([`products/${id}`]);
  };
}
