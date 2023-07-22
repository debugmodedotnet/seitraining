import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../entities/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
   @Input({required:true}) products? : Observable<any> ;
}
