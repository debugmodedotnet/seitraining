import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child11Component } from '../child11/child11.component';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule, Child11Component],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class Child1Component implements OnInit, OnChanges {

  @Input() count : any; 
  @Input({required:true}) foo : any; 
  showMessage = false; 
  @Output() parnetButtonDisabledEvent = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
     
    //console.log(this.count);
    if(this.count.count > 105){
      this.showMessage = true; 
      this.parnetButtonDisabledEvent.emit(true);
    }
  }

  ngOnInit(): void {
      console.log('init')

    }
}
