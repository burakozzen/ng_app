import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'ng_app';

  constructor(private productService: ProductService) { }

  addProduct() {
    let product: Product = {
      id: 8,
      name: 'Iphone 23',
      price: 65000,
      imageUrl: '3.jpeg',
      description: '',
      isActive: true,
      categoryId: 2,
    };

    this.productService.createProduct(product)
      .subscribe((result) => console.log(result));
  }
}
