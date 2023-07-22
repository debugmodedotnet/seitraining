import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { map, skip } from 'rxjs';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class Child1Component implements OnInit {
  dataservice = inject(DataService);
  data:any = []; 
  ngOnInit(): void {
      this.dataservice.count.pipe(map(x=>x*100),skip(3)).subscribe(data=>{
        console.log(data);
        this.data.push(data);
      })
  }
}
