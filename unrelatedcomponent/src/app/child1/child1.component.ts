import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   dataService = inject(DataService);
   count : any; 
    ngOnInit(): void {
       // this.count = this.dataService.getCount();
        this.dataService.Counter$.subscribe(data=>{
        this.count = data ;
       })
    }
}
