import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      const productId = p["productId"];

      this.productService.getProductById(productId).subscribe((p) => {
        this.product = { ...p, id: productId };
      });
    });
  }
}
