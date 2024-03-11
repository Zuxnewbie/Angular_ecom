import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productsInCart: any[] = [];

  constructor() { }

  addToCart(product: any) {
    // Add the product to the list of products in the cart
    this.productsInCart.push(product);
    console.log('Received product in HomeComponent:', product);
    console.log('Products in cart: [HOMECOMPONENT]', this.productsInCart);
  }


}
