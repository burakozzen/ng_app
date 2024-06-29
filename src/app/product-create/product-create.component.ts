import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "../models/product";
import { Router } from "@angular/router";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category";

@Component({
  selector: "product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
  providers: [ProductService, CategoryService],
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  saveProduct(
    name: any,
    price: any,
    imgUrl: any,
    description: any,
    isActive: any,
    categoryId: any
  ) {
    const product: Product = {
      id: 1,
      name: name.value,
      price: price.value,
      imageUrl: imgUrl.value,
      description: description.value,
      isActive: isActive.value,
      categoryId: categoryId.value,
    };

    console.log(`saveProduct: ${product}`);
    this.productService.createProduct(product).subscribe((res) => {
      console.log(`result: ${res}`);
      this.router.navigate(["/products"]);
    });
  }
}
