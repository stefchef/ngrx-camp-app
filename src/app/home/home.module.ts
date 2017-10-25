import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizzas/pizza/pizza.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustompizzaComponent } from './custompizza/custompizza.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [PizzasComponent, PizzaComponent, CategoriesComponent, CustompizzaComponent],
  exports : [PizzasComponent, PizzaComponent, CategoriesComponent, CustompizzaComponent]
})
export class HomeModule { }
