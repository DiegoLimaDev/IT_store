import { Injectable } from '@angular/core';
import { IProducts, products } from '../../types/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProducts[] = products;
  constructor() {}

  getAll = () => {
    return this.products;
  };

  getProductById = (id: number) => {
    return this.products.find((e) => e.id === id);
  };
}
