import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss']
})
export class CheckoutPage implements OnInit {
  @HostBinding('class.page') true;

  constructor() { }

  ngOnInit() {
  }

}
