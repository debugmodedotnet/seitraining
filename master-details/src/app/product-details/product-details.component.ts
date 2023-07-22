import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { IProductDetails } from '../entities/product-details';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {
  @Input({required:true}) Id =""; 
  ProductDetails? : IProductDetails | null ; 
  productService = inject(ProductService);
  @Output() showDetailsEvent = new EventEmitter<boolean>();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("hey");
      this.ProductDetails = this.productService.getProductsDetail(this.Id);
      console.log(this.ProductDetails);
  }


  hideDetails(){
    this.showDetailsEvent.emit(true);
  }

}
