import { Injectable } from '@angular/core';
import { ICartProducts } from 'src/app/types/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  BuyList: ICartProducts[] = [];

  getCarData = () => {
    return JSON.parse(localStorage.getItem('cart') || '');
  };

  addItemToCart = (product: ICartProducts) => {
    this.BuyList.push(product);
    localStorage.setItem('cart', JSON.stringify(product));
  };

  cartLength = () => {
    return this.BuyList.length.toString();
  };

  clearCart = () => {
    this.BuyList = [];
    localStorage.clear();
  };

  deleteItem = (id: number) => {
    this.BuyList = this.BuyList.filter((e) => e.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.BuyList));
  };

  changingQty = (id: number, value: number) => {
    this.BuyList[id].qty = value;
  };
}
