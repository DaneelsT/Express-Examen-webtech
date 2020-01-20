import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   constructor() {}

   products: Product[] = [
      {name: "product1", brand: "brand1", description: "description", price: 50   },
      {name: "product2", brand: "brand1", description: "description", price: 100   }
   ];
   getAllProducts(): Product[] {
      return this.products
   }

}
