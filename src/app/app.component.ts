import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
