import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { from } from 'rxjs';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:categoryId', component: CategoryDetailComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
