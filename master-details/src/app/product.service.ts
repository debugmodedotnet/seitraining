import { Injectable } from '@angular/core';
import { IProduct } from './entities/product';
import { IProductDetails } from './entities/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : IProduct[]= [

    {
      Id:"1",
      Title: "Pen",
      Price : 200 
    },
    {
      Id:"2",
      Title: "Pencil",
      Price : 100 
    },
    {
      Id:"3",
      Title: "Book",
      Price : 500 
    },
    {
      Id:"4",
      Title: "Bat",
      Price : 2000 
    },
    {
      Id:"5",
      Title: "Ball",
      Price : 600 
    }


  ];

  ProductsDetails : IProductDetails [] = [
    {
      Product :  {
        Id:"1",
        Title: "Pen",
        Price : 200 
      },
      Color : "Red",
      Quantity : 50,
      Distributor :"ABC"
    },
    {
      Product :{
        Id:"2",
        Title: "Pencil",
        Price : 100 
      },
      Color : "Blue",
      Quantity : 40,
      Distributor :"Xyz"
    },
    {
      Product :{
        Id:"3",
        Title: "Book",
        Price : 500 
      },
      Color : "Yellow",
      Quantity : 400,
      Distributor :"Abc"
    },
    {
      Product :{ 
        Id:"4",
        Title: "Bat",
        Price : 2000 
      },
      Color : "Red",
      Quantity : 100,
      Distributor :"Xyz"
    },
    {
      Product : {
        Id:"5",
        Title: "Ball",
        Price : 600 
      },
      Color : "Blue",
      Quantity : 200,
      Distributor :"Xyz"
    }
  ]
  
  constructor() { }

  getProducts() : IProduct[]{
   return this.products;
  }

  getProductsDetail(Id:string):IProductDetails | null {
    let index = this.ProductsDetails.findIndex(p=> p.Product.Id == Id);
    if(index != -1){
      return this.ProductsDetails[index];
    }
    else {
      return null; 
    }
 
  }
}
