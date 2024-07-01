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
  error_msg: string = "";
  product_model: any = { name: "Burak" };

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
    imageUrl: any,
    description: any,
    isActive: any,
    categoryId: any
  ) {
    const product: Product = {
      id: 1,
      name: name.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
      isActive: isActive.value,
      categoryId: categoryId.value,
    };
    this.error_msg = this.validateParameters(
      name.value,
      price.value,
      imageUrl.value,
      categoryId.value
    );
    if (this.error_msg != "") {
      return;
    }

    this.productService.createProduct(product).subscribe((res) => {
      console.log(`result: ${res}`);
      this.router.navigate(["/products"]);
    });
  }

  private validateParameters(
    name: any,
    price: any,
    imageUrl: any,
    categoryId: any
  ): string {
    if (name == "") {
      return "Enter Product Name !";
    }

    if (price == "") {
      return "Enter Product Price !";
    }

    const file_types = ["png", "jpeg", "jpg"];
    const product_file_type = imageUrl.split(".").pop();
    if (file_types.indexOf(product_file_type) == -1) {
      return "File type is not suitable !";
    }

    if (categoryId == "0") {
      return "Select category !";
    }
    return "";
  }
  getModelParameters() {
    console.log("GetModelParameters clicked !");
    console.log(this.product_model);
    this.error_msg = this.validateParameters(
      this.product_model.name,
      this.product_model.price,
      this.product_model.imageUrl,
      this.product_model.categoryId
    );
    console.log(this.error_msg);
    if (this.error_msg != "") {
      return;
    }
    this.product_model.id = 0;
    this.productService.createProduct(this.product_model).subscribe((res) => {
      console.log(`result: ${res}`);
      this.router.navigate(["/products"]);
    });
  }
}
