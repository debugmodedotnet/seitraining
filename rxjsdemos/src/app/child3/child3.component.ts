import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child3Component {
  public dataservice = inject(DataService);
  
}
