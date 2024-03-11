// cart.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: any[] = [];

    addToCart(product: any) {
        this.cartItems.push(product);
    }

    getCartItems() {
        return this.cartItems;
    }
    clearCart() {
        this.cartItems = [];
    }
}
