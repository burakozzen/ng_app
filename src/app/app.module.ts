import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product-list/product/product.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    CategoryListComponent,
    HomeComponent,
    ProductCreateComponent,
    CategoryCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
