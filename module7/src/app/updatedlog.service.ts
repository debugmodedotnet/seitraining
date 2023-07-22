import { Injectable } from '@angular/core';

@Injectable()
export class UpdatedlogService {

  private static count = 0; 
  constructor() { 
    UpdatedlogService.count = UpdatedlogService.count + 1; 
    console.log('updated log service object count -', UpdatedlogService.count);
  }

  sayHello(name:string){
    return "Updated Hello : " + name;
  }
}
