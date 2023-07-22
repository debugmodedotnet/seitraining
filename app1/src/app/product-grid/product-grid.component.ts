import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { IProduct } from '../entities/product.interface';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  // productService = inject(ProductService);
  products : IProduct[] = []; 

  constructor(private productService : ProductService){

  }
  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }

}
