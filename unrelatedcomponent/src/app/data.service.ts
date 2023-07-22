import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Counter = {
    count : 99
  }

  Counter$ : BehaviorSubject<any>;
  constructor() { 
    this.Counter$ = new BehaviorSubject<any>(this.Counter.count)
  }

  setCount(){
    this.Counter.count = this.Counter.count + 1; 
    this.Counter$.next(this.Counter.count);
    console.log(this.Counter.count);
  }
}
