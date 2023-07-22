import { Inject, Injectable } from '@angular/core';
import { apiconfigtoken } from './apiconfig.token';
import { ApiConfig } from './apiconfig';

console.log('I am part of Final Output bundle ');
@Injectable({providedIn:'any'})
export class LogService {
   
  private static count = 0; 
  constructor(@Inject(apiconfigtoken) private config: ApiConfig) { 
    LogService.count = LogService.count + 1; 
    console.log('Number of Objects created of Logservice - ', + LogService.count)
  }

  sayHello(name:string){
    return "Hello " + name;
  }

  callApi(){
    //here i WILL USE THE TOKEN PASSED FROM API CONFIG
    // IT SHOULD BE DIFFERENTY FOR DIFFERENT LAZYLOADED MODULES 
    return this.config;
  }
}
