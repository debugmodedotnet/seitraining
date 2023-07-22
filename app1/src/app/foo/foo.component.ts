import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
   name = "Foo";
   height = 100; 
   width = 100; 

  changeHeight() : void{
    this.height = this.height + 1; 
    this.width = this.width + 1; 
  }

}


// component           template 

// data ------------>  {{}}  - interpolation 

// function <----------  (event) - event binding

// data -------------> [style.height.px] - property binding 

// pb + eb = [] + () = [()] - two way data binding 

// [(ngModel)]


