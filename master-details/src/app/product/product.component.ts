import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { IProduct } from '../entities/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, ProductGridComponent,ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  productService= inject(ProductService);
  products : IProduct[] = []; 
  showDetails = false; 
  selectedId = "";
  showTable = true; 

  ngOnInit(): void {
      this.products = this.productService.getProducts().filter(p => p.Price < 500);
  }

  loadDetails(Id: string): void{
    this.showDetails = true; 
    this.selectedId = Id; 
  }

  hideDetails(mode:boolean){
    this.showDetails = !mode; 
    this.selectedId = ""; 
  }

  chooseLayout():void{
    this.showTable = !this.showTable
  }
}
