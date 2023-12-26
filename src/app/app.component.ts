import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, DashboardComponent]
})
export class AppComponent {
  
  title = 'e-shop';
  currentComponent: string = '';

  components: Array<{title: string, route: string}> = [
    {title: 'Home', route: '/home'},
    {title: 'New product', route: '/new-product'},
    {title: 'Products', route: '/products'}
  ]

  setCurrentComponent(component: string) {
    this.currentComponent = component;
  }
}
