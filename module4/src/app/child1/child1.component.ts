import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from '../child2/child2.component';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule,Child2Component, ChangecolorDirective],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Child1Component {
  title = "child1";
}
