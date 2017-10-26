import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [CategoriesComponent],
  exports: [CategoriesComponent]
})
export class HomeModule { }
