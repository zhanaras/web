import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CafeListComponent,
    TopBarComponent,
    WelcomePageComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryDetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot([
    //   { path: '', component: WelcomePageComponent },
    //   { path: 'places', component: CafeListComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
