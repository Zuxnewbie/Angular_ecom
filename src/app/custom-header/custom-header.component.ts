import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {
  cartItems: any[] = [];
  
  constructor(
    private cartService: CartService,
    private authService: AuthService // Inject AuthService
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
