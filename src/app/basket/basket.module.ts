import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';

@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [DeliverySettingsComponent]
})
export class BasketModule { }
