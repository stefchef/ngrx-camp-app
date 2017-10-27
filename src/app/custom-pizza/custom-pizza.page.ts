import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomPizzaState, Topping } from './custom-pizza.state';
import { MatListOption, MatSnackBar } from '@angular/material';
import { RootState } from '../app.state';
import { Pizza } from '../pizzas/pizza/index';
import { AddToBasket } from '../checkout/basket/index';

@Component({
  selector: 'app-custom-pizza',
  templateUrl: './custom-pizza.page.html',
  styleUrls: ['./custom-pizza.page.scss']
})
export class CustomPizzaPage implements OnInit {

  custompizzaState: CustomPizzaState;
  pizza: Pizza;
  snackBarRef: MatSnackBar;

  constructor(private store: Store<RootState>, private snackBar: MatSnackBar) {
    this.store.subscribe(s => this.custompizzaState = s.customPizzaState);
    this.store.subscribe(s => this.pizza = s.pizzasState.pizzas.find(p => p.categoryId === '2'));
    this.snackBarRef = snackBar;
  }

  addCustomPizzaToCart(options: MatListOption[]) {
    const toppings = <Topping[]>options.map(m => m.value);
    const pizza = { ...this.custompizzaState.pizza };
    pizza.toppings = toppings;
    this.snackBarRef.open('One custom pizza added to the basket.', null, { duration: 1000, });
    this.store.dispatch(new AddToBasket(pizza));
  }

  ngOnInit() {
  }

}
