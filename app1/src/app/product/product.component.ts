import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../entities/product.interface';
import { FooComponent } from '../foo/foo.component';
import { FormsModule } from '@angular/forms';
import { ProductSearchPipe } from '../product-search.pipe';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, 
    FooComponent, FormsModule, ProductSearchPipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  txtSearch : string ="";
  productService = inject(ProductService);
  constructor() {
    console.log('c');
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
