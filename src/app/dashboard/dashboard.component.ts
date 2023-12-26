import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public appState: AppStateService) {}

  chekecdProducts() : number{
    let checkedProducts = this.appState.productsState.products.filter((product: Product) => product.checked == true);
    return checkedProducts.length
  }

}
