import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza.state';
import { MatGridListModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RootState } from '../../../app.state';
import { AddToBasket } from '../../../basket/index';
import { Product } from '../../../basket/basket.state';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(private store: Store<RootState>) { }

  private AddToCart(pizzaToAdd: Product) {
    this.store.dispatch(new AddToBasket(pizzaToAdd));
  }

  ngOnInit() {
  }

}
