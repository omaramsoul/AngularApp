import { Product } from './../models/product.model';
import { filter } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public productsState : any = {
    products : [],
    totalProducts: 0,
    totalPages: 0, 
    page: 1,
    size: 3
  }

  constructor() { }

}
