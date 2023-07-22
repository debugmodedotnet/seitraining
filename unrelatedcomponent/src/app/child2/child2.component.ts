import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  dataService = inject(DataService);
  count : any; 
   ngOnInit(): void {
      //  this.count = this.dataService.getCount();
      this.dataService.Counter$.subscribe(data=>{
        this.count = data; 
      })
   }

   updateCount(){
    this.dataService.setCount();
   }
}
