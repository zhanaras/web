import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'category/:categoryId', component: CategoryDetailComponent },
      { path: 'category/product/:productId', component: ProductDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoryComponent,
    CategoryDetailComponent,
    MessagesComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
