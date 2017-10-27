import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPage } from './checkout.page';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';
import { BasketModule } from './basket/basket.module';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
    BasketModule,
  ],
  declarations: [CheckoutPage, DeliverySettingsComponent],
  exports: [CheckoutPage, DeliverySettingsComponent]
})
export class CheckoutModule { }
