import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit,OnDestroy {
  dataservice = inject(DataService);
  cd = inject(ChangeDetectorRef);
  data:any = [];
  showError = false; 
  showComplete = false; 
  errorMessage = "";
  
 // task 1
  observer: Observer<any> = {
    next:(data:any)=>{
      console.log(data);
      this.data.push(data);
      // task 4 
      this.cd.markForCheck();
    },
    error:(err:any)=>{
      console.log(err);
      this.showError = true;
      this.errorMessage = err; 
    },
    complete:()=>{
      console.log('complete');
      this.showComplete  = true; 
    }
  }

  countSubscription? : Subscription; 
  ngOnInit(): void {

   // task 2
      this.countSubscription = this.dataservice.count.subscribe(this.observer);
  }

  ngOnDestroy(): void {

    //task3
      if(this.countSubscription!= undefined){
        this.countSubscription.unsubscribe();
      }
  }
}
