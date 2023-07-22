import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { IProduct } from '../entities/product';
import { Observable, Subscription, of } from 'rxjs';
import { ProductTableComponent } from '../product-table/product-table.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  public productService = inject(ProductService); 
  Products : IProduct[] = []; 
  Products$? : Observable<any>;
  ProductSubscription? : Subscription;
  isTable = true; 
  @ViewChild('dataview',{static:true,read:ViewContainerRef}) datacontainer? : ViewContainerRef;

  ngOnInit(): void {
      this.ProductSubscription = this.productService.Products$?.subscribe((data:IProduct[])=>{
        this.Products = data; 
        console.log(this.Products);
        this.Products$ = of(this.Products);
        this.loadTable();
      });
    
  }
  switchView():void{
    this.isTable = !this.isTable; 
     if(this.isTable){
        this.loadTable();
    
     }
     else {
      this.loadGrid();
     }
  }

  async loadTable(){
    const {ProductTableComponent} = await import('../product-table/product-table.component');
    if(this.datacontainer){
      this.datacontainer.clear();
      let pt = this.datacontainer.createComponent(ProductTableComponent);
      pt.instance.products = this.Products$; 
    }

  }

  async loadGrid(){
    const {ProductGridComponent} = await import('../product-grid/product-grid.component');
    if(this.datacontainer){
      this.datacontainer.clear();
      let pt = this.datacontainer.createComponent(ProductGridComponent);
      pt.instance.products = this.Products$; 
      pt.instance.selectedProductEvent.subscribe((p:IProduct)=>{
        this.navigateToDetails(p);
      })
    }
  }

  navigateToDetails(p:IProduct){
    console.log('navigate to', p);
  }

  ngOnDestroy(): void {
      if(this.ProductSubscription){
        this.ProductSubscription.unsubscribe();
      }
  }
}
