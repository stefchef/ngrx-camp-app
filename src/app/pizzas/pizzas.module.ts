import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasPage } from './pizzas.page';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [PizzasPage, PizzaComponent],
  exports: [PizzasPage, PizzaComponent]
})
export class PizzasModule { }
