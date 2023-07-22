import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class Child2Component {
   title = "child2";
}
