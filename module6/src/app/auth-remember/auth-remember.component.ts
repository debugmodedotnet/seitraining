import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-remember',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent {
  @Output() checked : EventEmitter<boolean> = new EventEmitter<boolean>();
  onChecked(value:any){
    let b = value?.target?.checked; 
    this.checked.emit(b);
  }
}
