import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  products: any [];

  constructor() {
    this.products =[
      'Chocolate',
      'Coca Cola',
      'Hamburguer',
      'Banana',
      'Batata Frita'
    ];
  }

  getProducts(): any {
    return this.products;
  }
}
