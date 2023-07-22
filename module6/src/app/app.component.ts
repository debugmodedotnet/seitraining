import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { IUser } from './user';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthComponent, AuthRememberComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'content proejtion';
  rememberMe = false; 

  login(value: IUser) {
    console.log('Login', value, this.rememberMe);
  }

  singup(value: IUser) {
    console.log('signup', value);
  }
  rememeberUser(rem:boolean){
   this.rememberMe = rem; 
  }
}
