import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  //count : Observable<any>; 
  count : Subject<any>;
  //count : BehaviorSubject<any>;
  // count : ReplaySubject<any>;
 // count : AsyncSubject<any>;
  counter = 1; 
  constructor() { 

    // this.count = new Observable((subscriber)=>{
      
    //   setInterval(()=>{
    //     subscriber.next(this.counter++);
    //   },1000);
    // })
     this.count = new Subject<any>() ; 
    // this.count = new BehaviorSubject<any>(7484747) ; 
    // this.count = new ReplaySubject<any>() ; 

  //  this.count = new AsyncSubject<any>() ; 

    // this.count.next(1);
    // this.count.next(2);
    // this.count.next(3);
    setInterval(()=>{
      if(this.counter > 20){
        // this.count.error("there is probolem ");
        this.count.complete();
      }
      this.count.next(this.counter++);

    },1000)
  }
}
