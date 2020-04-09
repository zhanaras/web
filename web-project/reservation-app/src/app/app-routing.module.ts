import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { from } from 'rxjs';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:categoryId', component: CategoryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
