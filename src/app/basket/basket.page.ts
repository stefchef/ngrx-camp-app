import { Component, OnInit } from '@angular/core';
import { RootState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../pizzas/pizza/pizza.state';
import { BasketPosition } from './basket.state';
import { SomeState } from './delivery-settings/delivery-settings.state';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss']
})
export class BasketPage implements OnInit {

  basketItems: BasketPosition[];

  constructor(private store: Store<RootState>) {
    this.store.subscribe(s => {
      this.basketItems = s.basketState.items;
    });

    const t = <SomeState>{};
  }

  ngOnInit() {
  }

}
