import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() products: any[] = [];

  constructor() {
    console.log("ListComponent initialized.");
  }

  ngOnInit(): void {
    console.log("ListComponent ngOnInit called.");
    console.log("Products:", this.products); // Check if products are being received
  }

  deleteProduct(product: any) {
    // Find the index of the product in the array
    const index = this.products.indexOf(product);

    // If the product is found, remove it from the array
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  editProduct(product: any) {
    // Implement your edit logic here
    console.log('Editing product:', product);
    // You can open a modal or navigate to a different component for editing
  }
}
