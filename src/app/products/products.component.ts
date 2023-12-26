import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor(private productsService: ProductsService,
              public appState: AppStateService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts(this.appState.productsState.page, this.appState.productsState.size).subscribe({
      next: (response) => {
        this.appState.productsState.products = response.body as Product[];
        let totalObjects = parseInt(response.headers.get('x-total-count')!);
        this.appState.productsState.totalProducts = totalObjects;
        this.appState.productsState.totalPages = totalObjects % this.appState.productsState.size == 0 ? 
                                                 totalObjects / this.appState.productsState.size : 
                                                 Math.round(totalObjects / this.appState.productsState.size) + 1;
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
    this.appState.productsState.page = page;
    this.getProducts();
  }
}
