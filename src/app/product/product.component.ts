import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  @Output() addToCartClicked = new EventEmitter<any>();
  products: any[] = [
    {
      name: 'Product 1',
      img: 'pro-1.webp',
      price: 130000,
      imgHover: 'pro-1-1.webp',
      discount: 0.1,
      addCart: false,
      view: false,
      imgDetail: 'pro-1.webp',
      nameDetail: 'Product_1',
      description: 'This is a lot of description.',
      details: 'This is a details Product',
      inStock: 10,
      onSale: false,
    },
    {
      name: 'Product 2',
      img: 'pro-2.webp',
      price: 120000,
      imgHover: 'pro-2-1.webp',
      discount: 0,
      addCart: false,
      view: false,
      imgDetail: 'pro-2.webp',
      nameDetail: 'Product_2',
      description: 'This is a lot of description.',
      details: 'This is a details Product',
      inStock: 10,
      onSale: false,
    },
    {
      name: 'Product 3',
      img: 'pro-3.webp',
      price: 150000,
      imgHover: 'pro-3-1.webp',
      discount: 0,
      addCart: false,
      view: false,
      imgDetail: 'pro-3.webp',
      nameDetail: 'Product_3',
      description: 'This is a lot of description.',
      details: 'This is a details Product',
      inStock: 10,
      onSale: false,
    },
    {
      name: 'Product 4',
      img: 'pro-4.webp',
      price: 160000,
      imgHover: 'pro-4-1.webp',
      discount: 0.1,
      addCart: false,
      view: false,
      imgDetail: 'pro-4.webp',
      nameDetail: 'Product_4',
      description: 'This is a lot of description.',
      details: 'This is a details Product',
      inStock: 10,
      onSale: false,
    },
  ]


  cart: any[] = []
  selectedProduct: any = null; // Holds the details of the selected product

  constructor(private cartService: CartService) { }

  // Method to handle the click event of the "Quick View" button
  openQuickView(product: any) {
    this.selectedProduct = product;
  }

  // Method to close the quick view modal
  closeQuickView() {
    this.selectedProduct = null;
  }

  inStock() {
    return this.selectedProduct ? this.selectedProduct.inStock > 0 : false;
  }

  cartItems: any[] = []; // Array to hold items added to cart

  addToCart(product: any) {
    if (product.inStock > 0) {
      this.cartService.addToCart(product);
      product.inStock--; // Decrease the inStock quantity
      if (product.inStock <= 0) {
        product.addCart = true; // Hide the "Add to Cart" button when out of stock
      }
    }

  }

  addProduct(productForm: NgForm) {
    const newProduct = {
      name: productForm.value.name,
      price: productForm.value.price,
      description: productForm.value.description,
      details: productForm.value.details,
      inStock: productForm.value.stock,
      nameDetail: productForm.value.nameDetail,
      img: 'pro-1-1.webp',
      imgHover: 'pro-1.webp',
      discount: 0,
      addCart: false,
      view: false,
      imgDetail: 'pro-1-1.webp',
      onSale: false,
    };

    this.products.push(newProduct);

    console.log('DAY LA PRODUCTTTTTTTT', this.products)

    // You may want to clear the form fields after adding the product
    productForm.resetForm();
  }

}
