import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) products: IProduct[] = [];
  @Input({ required: true }) selectedId: string = '';
   @Output() loadDetailEvent = new EventEmitter<string>();
  loadDetails(id: string): void {
    this.loadDetailEvent.emit(id);
  }
}
