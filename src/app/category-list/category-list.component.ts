import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";

@Component({
  selector: "category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null;
  displayAll = false;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  ngOnInit(): void {}

  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
