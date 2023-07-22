import { Injectable } from '@angular/core';
import { IProduct } from './entities/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   Products : IProduct[] = [
   {
    Id:"1",
    Title:"Pen",
    Price : 200
   },
   {
    Id : "2",
    Title : "Pencil",
    Price : 300
   }
  ];

   Products$? : BehaviorSubject<IProduct[]>;
  constructor() {
    this.Products$ = new BehaviorSubject<IProduct[]>(this.Products);
   }

}
