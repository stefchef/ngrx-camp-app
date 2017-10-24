import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizzas/pizza/pizza.component';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    PizzaMaterialModule,
  ],
  declarations: [PizzasComponent, PizzaComponent],
  exports : [PizzasComponent, PizzaComponent]
})
export class HomeModule { }
