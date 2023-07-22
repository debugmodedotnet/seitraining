import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ApiConfig } from '../apiconfig';
import { LogService } from '../log.service';
import { apiconfigtoken } from '../apiconfig.token';

export const configValue: ApiConfig = {
  EndPoint:'order.com',
  Token:'9999'
};

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[{provide:apiconfigtoken,useValue:configValue}]
})
export class OrdersModule { }
