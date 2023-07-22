import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function AgeRangeValidators(minage:number, maxAge:number): ValidatorFn{


    return(control: AbstractControl):ValidationErrors | null =>{
       if(control.value !== undefined && (isNaN(control.value) || control.value<minage || control.value> maxAge))
       {
          return{'ageRange':true}
       } 
       return null; 
    }
}