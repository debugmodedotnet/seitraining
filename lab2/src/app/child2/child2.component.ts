import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child21Component } from '../child21/child21.component';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule, Child21Component],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnChanges {
   
  @Input() foo : any; 
  a= 99;
  b = 100; 

   constructor(){
   console.log('constructor');
   }
   ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
   }
   ngOnInit(): void {
    console.log('init');
   }

   updateFoo():void{
    this.a = this.a + 1; 
   }

   updateKoo():void{
    this.b = this.b + 1; 
   }

   updateBoth():void{
    this.a = this.a + 1;
    this.b = this.b + 1; 
   }
}
