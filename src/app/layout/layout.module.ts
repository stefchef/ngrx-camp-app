import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  exports: [PizzaMaterialModule]
})
export class LayoutModule { }
