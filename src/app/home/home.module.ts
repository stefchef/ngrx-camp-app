import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizzas/pizza/pizza.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [PizzasComponent, PizzaComponent],
  exports : [PizzasComponent, PizzaComponent]
})
export class HomeModule { }
