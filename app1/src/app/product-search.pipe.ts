import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './entities/product.interface';

@Pipe({
  name: 'productSearch',
  standalone: true
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] | null {
    if(args == undefined){
      return null;
    }
    
    return value.filter(p=> p.Title.toLowerCase().includes(args.toLowerCase()));
  }

}
