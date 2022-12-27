import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { IProducts } from 'src/app/types/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[] | undefined;
  search = '';

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productsService.getAll();
  }
  goToDetails = (id: number) => {
    return this.router.navigate([`products/${id}`]);
  };

  filteringSearch = (name: string) => {
    if (this.search != '') {
      this.products = this.productsService.getAll();
      this.products = this.products?.filter((e) =>
        e.description.toLowerCase().match(name.toLowerCase())
      );
    } else {
      this.products = this.productsService.getAll();
    }
  };
}
