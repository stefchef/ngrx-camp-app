import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { CategoriesComponent } from './categories/categories.component';
import { CustompizzaComponent } from './custompizza/custompizza.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [CategoriesComponent, CustompizzaComponent],
  exports : [ CategoriesComponent, CustompizzaComponent]
})
export class HomeModule { }
