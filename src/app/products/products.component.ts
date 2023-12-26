import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { Observable, filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : Product[] = [];
  totalPages: number = 0;
  page: number = 1;
  size: number = 3;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts(this.page, this.size).subscribe({
      next: (response) => {
        console.log(this.page + " " + this.size);
        this.products = response.body as Product[];
        let totalObjects = parseInt(response.headers.get('x-total-count')!);
        this.totalPages = totalObjects % this.size == 0 ? totalObjects / this.size : Math.round(totalObjects / this.size) + 1;
      }
    })
  }

  handleCheckProduct(product: Product) {
    this.productsService.updateCheckedProduct(product).subscribe({
      next: updatedProduct => product.checked = updatedProduct.checked
    })
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product).subscribe({
      next: (response: Product[]) => console.log(response.values)
    })
  }

  handlePages(page: number) {
    this.page = page;
    this.getProducts();
  }
}
