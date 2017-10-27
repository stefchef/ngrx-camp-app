import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza.state';
import { MatGridListModule, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';

import { RootState } from '../../app.state';
import { AddToBasket } from '../../checkout/basket/index';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  snackBarRef: MatSnackBar;
  @Input() pizza: Pizza;

  constructor(private store: Store<RootState>, private snackBar: MatSnackBar) {
    this.snackBarRef = snackBar;
  }

  private AddToCart(pizzaToAdd: Pizza) {
    this.snackBarRef.open(`One pizza ${pizzaToAdd.name} added to the basket.`, null, { duration: 1000, });
    this.store.dispatch(new AddToBasket(pizzaToAdd));
  }

  ngOnInit() {
  }

}
