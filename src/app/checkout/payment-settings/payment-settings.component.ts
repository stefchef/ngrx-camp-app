import { Component, OnInit } from '@angular/core';
import { CardType } from './payment-settings.state';

@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.scss']
})
export class PaymentSettingsComponent implements OnInit {

  paymentOptions: any[];

  constructor() {
    const objValues = Object.keys(CardType).map(k => CardType[k]);
    this.paymentOptions = objValues.filter(v => typeof v === 'string') as string[];
  }

  ngOnInit() {
  }

}
