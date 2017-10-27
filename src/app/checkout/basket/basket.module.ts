import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { PizzaMaterialModule } from '../../pizza-material/pizza-material.module';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [BasketComponent],
  exports: [BasketComponent]
})
export class BasketModule { }
