import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
import { BasketPage } from './basket.page';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [BasketPage, DeliverySettingsComponent],
  exports: [BasketPage, DeliverySettingsComponent]
})
export class BasketModule { }
