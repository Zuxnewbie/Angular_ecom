import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  editItem(item: any) {
    // Implement edit functionality here
    console.log('Editing item:', item);
  }

  deleteItem(item: any) {
    // Implement delete functionality here
    console.log('Deleting item:', item);
    // Assuming cartItems is an array of objects and you want to remove the item from the array
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
