import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  @Input({ required: true }) products: IProduct[] = [];
  @Input({ required: true }) selectedId: string = '';

  @Output() loadDetailEvent = new EventEmitter<string>();
  loadDetails(id: string): void {
    this.loadDetailEvent.emit(id);
  }
}
