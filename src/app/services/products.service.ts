import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Array<Product>>{
    return this.http.get<any>("http://localhost:8089/products")
  }

  updateCheckedProduct(product: Product) {
    return this.http.patch<any>(`http://localhost:8089/products/${product.id}`, {checked: !product.checked})
  }

  deleteProduct(product: Product) : Observable<Array<Product>>{
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`)
  }
}
