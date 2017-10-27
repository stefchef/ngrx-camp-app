import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
import { BasketComponent } from './basket.component';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [BasketComponent, DeliverySettingsComponent],
  exports: [BasketComponent, DeliverySettingsComponent]
})
export class BasketModule { }
