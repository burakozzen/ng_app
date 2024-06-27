import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productRepository: ProductRepository;
  selectedProduct: Product | null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      if (p['categoryId']) {
        this.products = this.productRepository.getProductsByCategoryId(
          p['categoryId']
        );
      } else {
        this.http.get("https://ng-shopapp-fa258-default-rtdb.firebaseio.com/products.json")
          .subscribe(p => {
            console.log(p)
          })

        this.products = this.productRepository.getProducts();
      }
    });
  }
}
