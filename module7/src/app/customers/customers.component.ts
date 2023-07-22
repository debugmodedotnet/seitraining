import { Component, OnInit, inject } from '@angular/core';
import { LogService } from '../log.service';
import { ApiConfig } from '../apiconfig';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  logservice  = inject(LogService);
  message = "";
  api? : ApiConfig;
   

   ngOnInit(): void {
       this.message = this.logservice.sayHello("Customers");
       this.api = this.logservice.callApi();

   }

}
