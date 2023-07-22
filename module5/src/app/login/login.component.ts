import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LastValueFromConfig } from 'rxjs/internal/lastValueFrom';
import { AgeRangeValidators } from '../custom-validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm : FormGroup; 
  fb = inject(FormBuilder);
  minAge = 10; // api 
  maxAge = 50; 

  constructor(){
    // this.loginForm = new FormGroup({
    //   Email : new FormControl("",[Validators.required]),
    //   Address : new FormGroup({
    //     City : new FormControl(""),
    //     PinCode : new FormControl("")
    //   }),
    //   Password : new FormControl("",[Validators.required,Validators.minLength(4)])
    // })
    this.loginForm = new FormGroup({
      Email : new FormControl("",[Validators.required]),
      Password : new FormControl("",[Validators.required,Validators.minLength(4)]),
      Age : new FormControl("",[AgeRangeValidators(this.minAge,this.maxAge)]),
      Phone: new FormControl(""),
      Notification: new FormControl('Email')
    },{
      validators:[]
    })

    // this.loginForm = this.fb.group({
    //   Email:["",[Validators.required]],
    //   Password:["",[Validators.required,Validators.minLength(4)]]
    // })
  }

  ngOnInit(): void {
      this.notificationChanged();
  }

  login(){
   
  //  this.loginForm.get('Address')?.get("City")?.setValue("Kolkata");
  
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
  }

  notificationChanged(){
    const phoneControl = this.loginForm.get('Phone');
    this.loginForm.get('Notification')?.valueChanges.subscribe(
      (mode:string)=>{
        console.log(mode);
        if(mode == 'Phone'){
          phoneControl?.setValidators([Validators.required]);
        }
        else if ( mode == 'Email'){
          phoneControl?.clearValidators();
        }
        phoneControl?.updateValueAndValidity();
      }
    )

  }
}
