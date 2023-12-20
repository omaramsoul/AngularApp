import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : Array<any> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>("http://localhost:8089/products").subscribe(
      {
        next: data => this.products = data,
        error: err => console.log(err)
      });
  }

  // products: Array<{id: number, title: string, price: number, checked: boolean}> = [
  //   {id: 1, title: 'Iphone 14 pro', price: 1100, checked: true},
  //   {id: 2, title: 'Iphone 11', price: 600, checked: false},
  //   {id: 3, title: 'Iphone 13 normal', price: 700, checked: true}
  // ];

  handleCheckProduct(product: {id: number, title: string, price: number, checked: boolean}) {
    product.checked = !product.checked;
  }
}
