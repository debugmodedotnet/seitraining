import { Component, inject } from '@angular/core';
import { LogService } from '../log.service';
import { ApiConfig } from '../apiconfig';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  logservice  = inject(LogService);
  message = "";
  api? : ApiConfig;
   
   ngOnInit(): void {
       this.message = this.logservice.sayHello("Orders");
       this.api = this.logservice.callApi();

   }

}
