import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPage } from './checkout.page';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
import { BasketComponent } from './basket/basket.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
  ],
  declarations: [CheckoutPage, DeliverySettingsComponent, BasketComponent, PaymentSettingsComponent],
  exports: [CheckoutPage, DeliverySettingsComponent, BasketComponent]
})
export class CheckoutModule { }
