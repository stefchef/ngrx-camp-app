import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
import { BasketComponent } from './basket.component';
import { PizzaMaterialModule } from '../../pizza-material/pizza-material.module';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [BasketComponent, DeliverySettingsComponent],
  exports: [BasketComponent, DeliverySettingsComponent]
})
export class BasketModule { }
