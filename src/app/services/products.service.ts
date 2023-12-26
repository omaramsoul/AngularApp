import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(page: number, size: number){
    return this.http.get(`http://localhost:8089/products?_page=${page}&_limit=${size}`, {observe: 'response', transferCache: true})
  }

  updateCheckedProduct(product: Product) {
    return this.http.patch<any>(`http://localhost:8089/products/${product.id}`, {checked: !product.checked})
  }

  deleteProduct(product: Product) {
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`)
  }

  saveProduct(product: Product) : Observable<Product>{
    return this.http.post<Product>(`http://localhost:8089/products`, product)
  }
}
