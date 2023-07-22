import { Injectable } from '@angular/core';
import { IProduct } from './entities/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProduct[] {
    const products: IProduct[] = [
      {
        Id: 1,
        Title: 'Bat',
        inStock: true,
        Price: 200,
        Color:"Red"
      },
      {
        Id: 2,
        Title: 'Ball',
        Price: 300,
        Color: 'Blue',
        inStock: true
      },
      {
        Id: 3,
        Title: 'Pen',
        Price: 400,
        Color: 'Yellow',
        inStock: false
      },
      {
        Id: 4,
        Title: 'Pencil',
        Price: 600,
        Color: 'Blue',
        inStock: true
      },
      {
        Id: 5,
        Title: 'Coffee',
        Price: 600,
        Color: 'Black',
        inStock: true
      },
    ];
    return products;
  }

}
