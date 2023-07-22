import { Component, OnInit, inject } from '@angular/core';
import { LogService } from '../log.service';
import { ApiConfig } from '../apiconfig';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   logservice = inject(LogService);
   message = "";
   api? : ApiConfig;
   
   ngOnInit(): void {
     this.message = this.logservice.sayHello("Child1");  
     this.api = this.logservice.callApi();
     
   }
}
