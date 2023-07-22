import { Component, OnInit, inject } from '@angular/core';
import { UpdatedlogService } from '../updatedlog.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  logservice = inject(UpdatedlogService);
  message = "";
  ngOnInit(): void {
      this.message = this.logservice.sayHello("Child 3");
  }
}
