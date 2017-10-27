import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomPizzaState, Topping } from './custom-pizza.state';
import { MatListOption, MatSnackBar, MatSelectionList } from '@angular/material';
import { RootState } from '../app.state';
import { Pizza } from '../pizzas/pizza/index';
import { AddToBasket } from '../checkout/basket/index';

@Component({
  selector: 'app-custom-pizza',
  templateUrl: './custom-pizza.page.html',
  styleUrls: ['./custom-pizza.page.scss']
})
export class CustomPizzaPage implements OnInit {
  @ViewChild('toppings') private toppings: MatSelectionList;
  custompizzaState: CustomPizzaState;
  pizza: Pizza;
  constructor(private store: Store<RootState>, private snackBar: MatSnackBar) {
    this.store.subscribe(s => this.custompizzaState = s.customPizzaState);
    this.store.subscribe(s => this.pizza = s.pizzasState.pizzas.find(p => p.categoryId === '2'));
  }

  addCustomPizzaToCart() {
    const toppings = <Topping[]>this.toppings.selectedOptions.selected.map(m => m.value);
    const pizza = { ...this.custompizzaState.pizza };
    pizza.toppings = toppings;
    this.snackBar.open('One custom pizza added to the basket.', null, { duration: 1000, });
    this.store.dispatch(new AddToBasket(pizza));
    this.toppings.options.forEach(this.deselectNonDefault);
  }
  deselectNonDefault(item: MatListOption) {
    if ((<Topping>item.value).isDefault === true) {
      item.selected = true;
    } else {
      item.selected = false;
    }
  }
  ngOnInit() {
  }

}
