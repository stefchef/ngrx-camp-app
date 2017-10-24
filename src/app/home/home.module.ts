import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizzas/pizza/pizza.component';
import { MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: [PizzasComponent, PizzaComponent],
  exports : [PizzasComponent, PizzaComponent]
})
export class HomeModule { }
