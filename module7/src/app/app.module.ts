import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedlogService } from './updatedlog.service';
import { Child3Component } from './child3/child3.component';
import { GlobalErrorService } from './global-error.service';
import { HomeComponent } from './home/home.component';
import { ApiConfig } from './apiconfig';
import { apiconfigtoken } from './apiconfig.token';
const flag = true; 
// const getLog = ()=>{
//   if(flag){
//    return new LogService;
//   }
//   else {
//     return new UpdatedlogService;
//   }
// }
export const configValue: ApiConfig = {
  EndPoint:'abc.com',
  Token:'abdfef5'
};

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:UpdatedlogService,useExisting:LogService},
    {provide:apiconfigtoken,useValue:configValue}
//   {provide:ErrorHandler,useClass:GlobalErrorService}
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
