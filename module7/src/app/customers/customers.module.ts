import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ApiConfig } from '../apiconfig';
import { apiconfigtoken } from '../apiconfig.token';
import { LogService } from '../log.service';

export const configValue: ApiConfig = {
  EndPoint:'customer.com',
  Token:'abdfef5'
};

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{provide:apiconfigtoken,useValue:configValue}]
})
export class CustomersModule { }
