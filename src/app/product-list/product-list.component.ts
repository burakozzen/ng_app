import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productRepository: ProductRepository;
  selectedProduct: Product | null;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.productService.getProducts(p['categoryId']).subscribe(data => {
        this.products = data
      })
    });
  }
}
