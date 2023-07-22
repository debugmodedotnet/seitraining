import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authmessage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authmessage.component.html',
  styleUrls: ['./authmessage.component.css']
})
export class AuthmessageComponent {
  days: number = 7; 
}
