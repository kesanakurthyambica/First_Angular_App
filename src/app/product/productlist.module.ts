import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstcompComponent } from './productlist.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    FirstcompComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component :  FirstcompComponent},
    ]),
  ],
})

export class ProductlistModule { }
