import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/pro.component';
import { HomeComponent } from './home/main.component';
import { ProductlistModule } from './product/productlist.module';
import { ProductView } from './product-view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ProductView
    // FirstCompComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    RouterModule.forRoot([
      // { path: 'products', component :  FirstcompComponent},
      { path: 'profile', component : ProfileComponent},
      { path: 'home', component : HomeComponent},
      { path : '', redirectTo : 'home', pathMatch : 'full'},
      { path : 'productview' , component : ProductView}
    ]),
    ProductlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
