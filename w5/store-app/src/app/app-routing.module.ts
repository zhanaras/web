import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { CompsComponent } from './comps/comps.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products/productId', component: ProductDetailsComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'cart', component: CartComponent },
  { path: 'categories/:id/products', component: CompsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
