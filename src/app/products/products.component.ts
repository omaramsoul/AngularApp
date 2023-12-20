import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products$! : Observable<Array<Product>>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // this.productsService.getProducts().subscribe(
    //   {
    //     next: data => this.products = data,
    //     error: err => console.log(err)
    //   });

    this.products$ = this.productsService.getProducts();
  }

  handleCheckProduct(product: Product) {
    this.productsService.updateCheckedProduct(product).subscribe({
      next: updatedProduct => product.checked = updatedProduct.checked
    })
  }
}
