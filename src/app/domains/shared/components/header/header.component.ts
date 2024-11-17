import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;  // Accediendo al signal del carrito
  total = this.cartService.total;  // Accediendo al signal del total

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
