import { Injectable } from '@angular/core';
import { IProduct } from './entities/product';
import { BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DemoService {
  Products :IProduct[] = [
    {
      Id:"1",
      Title :"Pen",
      Quantity : 100
    },
    {
      Id:"2",
      Title :"Pencil",
      Quantity : 0
    }
  
  ];

  Price = [10,20,30,40,50,60,70,80,90];
  Quanity = [1,2,3,4,5,6,7,8,9];

  Product$ : Subject<IProduct>;
  Price$ : Subject<number>;
  Quanity$ : Subject<number>;
  productIndex = 0; 
  priceIndex = 0;
  quantityIndex = 0;
  constructor() { 
    this.Product$ = new Subject<IProduct>();
    this.Price$ = new Subject<number>();
    this.Quanity$ = new Subject<number>();
   
    setInterval(()=>{
      this.Product$.next(this.Products[0]);
      this.productIndex = this.productIndex + 1; 
    },1000);

    setInterval(()=>{
      this.Price$.next(this.Price[this.priceIndex]);
      this.priceIndex = this.priceIndex + 1; 
    },2000);

    setInterval(()=>{
      this.Quanity$.next(this.Price[this.priceIndex]);
      this.quantityIndex = this.quantityIndex + 1; 
    },2000)
  }
}
