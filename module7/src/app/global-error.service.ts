import { ErrorHandler, Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorService implements ErrorHandler {

  constructor() { }
  
  handleError(error: any): void {
     const message = error.message? error.message : error.toString();
     const url = "abc";
     const datetime = "abababa";
     StackTrace.fromError(error).then(s=>{
      const stackstring = s.splice(0,20).map(function(r){
          return r.toString();
      }).join('\n');
      console.log(message,url,datetime,stackstring)
    })


  }
}
