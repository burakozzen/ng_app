import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, map, tap } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService {
  private base_url: string =
    "https://ng-shopapp-fa258-default-rtdb.firebaseio.com/";
  private category_json_url: string = this.base_url + "categories.json";
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.category_json_url).pipe(
      map((datas) => {
        const categories: Category[] = [];
        for (const key in datas) {
          categories.push({ ...datas[key], id: key });
        }
        return categories;
      })
    );
  }

  createCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.category_json_url, category)
      .pipe(delay(1000));
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http
      .get<Category>(this.base_url + `categories/${id}.json  `)
      .pipe(delay(1000));
  }
}
