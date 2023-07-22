import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './count/count.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'change detection demo';
  _count =1 ; 
  count = {
    count : 10
  }
  Counter : BehaviorSubject<any>; 
  constructor(){
    this.Counter = new BehaviorSubject<any>({
      count : 0
    })
  }

  ngOnInit(): void {
     
  }
  incCount():void{
    this.Counter.next({
      count : ++this._count
    })
    // this.Counter.count = this.Counter.count + 1; 
    // this.Counter = {
    //   count :9
    // }
    // console.log(this.Counter.count);

    this.count = {
      count : this.count.count + 1
    }
  }
}
