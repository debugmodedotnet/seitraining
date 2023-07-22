import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {
  @Input({required:true}) products? : Observable<any> ;
  @Output() selectedProductEvent = new EventEmitter<IProduct>();

  showDetails(p:IProduct):void{
    this.selectedProductEvent.emit(p);
  }
}
