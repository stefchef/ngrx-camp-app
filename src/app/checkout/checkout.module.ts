import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPage } from './checkout.page';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckoutPage],
  exports:[CheckoutPage]
})
export class CheckoutModule { }
