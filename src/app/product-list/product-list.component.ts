import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productService.getProducts(-1).subscribe((res) => {
      this.products = res;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((p) => {
      this.productService.getProducts(p["categoryId"]).subscribe((data) => {
        this.products = data;
        this.loading = false;
      });
    });
  }
}
