import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'e-shop';
  currentComponent: string = '';

  constructor(public appState: AppStateService) {}

  components: Array<{title: string, route: string}> = [
    {title: 'Home', route: '/home'},
    {title: 'New product', route: '/new-product'},
    {title: 'Products', route: '/products'}
  ]

  setCurrentComponent(component: string) {
    this.currentComponent = component;
  }
}
