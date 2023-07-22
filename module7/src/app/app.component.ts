import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'module7';
  data : any; 

  sort(){
    this.data.sort();
  }
}



// step 1 - create a service ng g s 
// step 2 - Provide the service 
// Step 3 - Inject the service 
// Step 4m - Use the Service 