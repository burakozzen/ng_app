import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng_app';

  constructor(private http: HttpClient) {}

  addProduct() {
    let product = {
      id: 8,
      name: 'Iphone 21',
      price: 65000,
      imageUrl: '3.jpeg',
      description: 'Iphone 21 iyi bir telefondur',
      isActive: true,
      categoryId: 2,
    };

    this.http
      .post(
        'https://ng-shopapp-fa258-default-rtdb.firebaseio.com/products.json',
        product
      )
      .subscribe((result) => console.log(result));
  }
}
