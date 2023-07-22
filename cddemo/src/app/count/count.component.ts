// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Observable, Subscribable, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-count',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './count.component.html',
//   styleUrls: ['./count.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class CountComponent implements OnInit, OnDestroy{
 
//   count : any; 
//   @Input() Counter?:Observable<any>;
//   CountSubscription? :  Subscription;
//   cd = inject(ChangeDetectorRef);

//   ngOnInit(): void {
//       this.CountSubscription = this.Counter?.subscribe(data=>{
//         this.count = data.count; 
//         console.log('value chnaged', this.count);
//         this.cd.markForCheck();
//       })
//   }

//   ngOnDestroy(): void {
//       if(this.CountSubscription){
//         this.CountSubscription.unsubscribe();
//       }
//   }
// }

// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Observable, Subscribable, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-count',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './count.component.html',
//   styleUrls: ['./count.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class CountComponent{
//   @Input() Counter?:Observable<any>;
// }


import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class CountComponent implements OnInit, OnDestroy{
 
  @Input() count : any; 
  cd = inject(ChangeDetectorRef);

  constructor(){
    this.cd.detach();
  }
  ngOnInit(): void {
    
  }
  refresh():void{
   // this.cd.detectChanges();

    this.cd.reattach();
    this.cd.markForCheck();
  }
  ngOnDestroy(): void {
    
  }
}
