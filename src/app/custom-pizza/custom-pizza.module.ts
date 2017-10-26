import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPizzaPage } from './custom-pizza.page';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule
  ],
  declarations: [CustomPizzaPage],
  exports: [CustomPizzaPage]
})
export class CustomPizzaModule { }
