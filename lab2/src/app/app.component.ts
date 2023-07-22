import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Child11Component } from './child11/child11.component';
import { Child21Component } from './child21/child21.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,Child1Component,Child2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  isButtonDisabled = false; 

  counter = {
    count : 99
  }
  // @ViewChild('child2',{static:false}) foo? : Child2Component;
   count = true; 

  changeCount(){

    this.counter.count = this.counter.count + 1; 
    console.log(this.counter.count);
    // this.counter = {
    //   count : this.counter.count + 1
    // } 
  }
  disableButton(value:boolean){
   this.isButtonDisabled = value; 
  }

  // ngOnInit(): void {
  //    console.log(this.foo);
  // }
}
