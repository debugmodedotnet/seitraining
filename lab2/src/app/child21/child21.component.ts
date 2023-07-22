import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child21',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child21.component.html',
  styleUrls: ['./child21.component.css']
})
export class Child21Component implements OnChanges {

  @Input() foo?: number; 
  @Input() koo? : number; 


  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes);

      for(var p in changes){
         console.log(p);
         if(p == "foo"){
           console.log(changes[p].previousValue)
         }
      }
  }

}
