import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, map, tap } from "rxjs";
import { Product } from "src/app/models/product";

@Injectable()
export class ProductService {
  private base_url: string =
    "https://ng-shopapp-fa258-default-rtdb.firebaseio.com/";
  private product_json_url: string = this.base_url + "products.json";

  constructor(private http: HttpClient) {}

  getProducts(categoryId: number): Observable<Product[]> {
    console.log(`categoryId: ${categoryId}`);

    return this.http.get<Product[]>(this.product_json_url).pipe(
      map((datas) => {
        const products: Product[] = [];
        for (const key in datas) {
          if (categoryId) {
            if (categoryId == datas[key].categoryId) {
              products.push({ ...datas[key], id: key });
            }
          } else {
            products.push({ ...datas[key], id: key });
          }
        }
        return products;
      }),
      delay(1000)
    );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.product_json_url, product);
  }

  getProductById(id: string): Observable<Product> {
    return this.http
      .get<Product>(this.base_url + `products/${id}.json  `)
      .pipe(delay(1000));
  }
}

function tab(): import("rxjs").OperatorFunction<Product[], Product[]> {
  throw new Error("Function not implemented.");
}
