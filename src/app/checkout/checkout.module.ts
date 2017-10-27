import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPage } from './checkout.page';
import { PizzaMaterialModule } from '../pizza-material/pizza-material.module';
import { BasketModule } from './basket/basket.module';
import { DeliverySettingsComponent } from './basket/delivery-settings/delivery-settings.component';
@NgModule({
  imports: [
    CommonModule,
    PizzaMaterialModule,
    BasketModule,
  ],
  declarations: [CheckoutPage],
  exports: [CheckoutPage]
})
export class CheckoutModule { }
