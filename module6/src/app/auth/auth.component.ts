import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../user';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthmessageComponent } from '../authmessage/authmessage.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthmessageComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, AfterContentInit, OnChanges, AfterViewInit {
  showMessage = false; 
  cd = inject(ChangeDetectorRef);
  @Output() submitted: EventEmitter<IUser> = new EventEmitter<IUser>();

  @ContentChild(AuthRememberComponent) rememember? : AuthRememberComponent;
  @ViewChild(AuthmessageComponent) message? : AuthmessageComponent;

  onSubmit(value: IUser) {
    this.submitted.emit(value);
  }

  ngOnInit(): void {
    console.log('init',this.message);
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit',this.message);
    if(this.rememember){
      this.rememember.checked.subscribe(data=>{
        this.showMessage =  data; 
      })
    }
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.rememember);
      console.log('changes',this.message);
  }
  ngAfterViewInit(): void {
      console.log('viewinit',this.message);
      if(this.message){
        this.message.days = 99; 
        this.cd.detectChanges();
      }
  }
}
