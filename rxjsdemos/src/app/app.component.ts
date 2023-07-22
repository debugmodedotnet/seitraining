import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { DemoService } from './demo.service';
import { IProduct } from './entities/product';
import { combineLatest, map, mergeAll, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Child1Component, Child2Component, Child3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjsdemos';
  demoservice = inject(DemoService);
  // showChild2 = false;
  // showChild3 = false;
  // ngOnInit(): void {}
  // sc(){
  //   this.showChild2 = true; 
  // }
  // sc1(){
  //   this.showChild3= true; 
  // }
  
  ngOnInit(): void {
      
    // this.demoservice.Product$.pipe(
    //   withLatestFrom(this.demoservice.Price$),
    //   map(([p,pr])=>{ 
    //   return p.Quantity * pr;
    // })).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //   }
    // );

    // combineLatest(this.demoservice.Product$,this.demoservice.Price$).pipe(map(([p,pr])=>{return p.Quantity *pr})).subscribe(
    //   data=>{
    //        console.log(data);
    //   }
    // )

    
  }
}
