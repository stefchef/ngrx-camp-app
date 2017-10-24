import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizzas/pizza/pizza.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [PizzasComponent, PizzaComponent, CategoryComponent],
  exports : [PizzasComponent, PizzaComponent]
})
export class HomeModule { }
