import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "./models/product";
import { CategoryService } from "./services/category.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ProductService, CategoryService],
})
export class AppComponent {
  title = "ng_app";

  getTitle() {
    return this.title;
  }
}
