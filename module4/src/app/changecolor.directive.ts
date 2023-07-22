import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ngindiaChangecolor]',
  standalone: true
})
export class ChangecolorDirective {
  
  constructor() { }
  @HostBinding('style.border') border? : string; 
  @HostBinding('style.color') color ? : string; 
  @HostListener('mouseover') abc(){
     console.log('mouse enter');
     this.border = '5px solid green';
     this.color ="red";
  }
  @HostListener('mouseleave') xyz(){
    console.log('mouse leave');
    this.border = '';
 }
}
