import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Router } from "@angular/router";
import { Category } from "../models/category";

@Component({
  selector: "category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.css"],
  providers: [CategoryService],
})
export class CategoryCreateComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveCategory(name: any) {
    const category: Category = {
      id: 0,
      name: name.value,
    };

    this.categoryService.createCategory(category).subscribe((res) => {
      this.router.navigate(["/products"]);
    });
  }
}
