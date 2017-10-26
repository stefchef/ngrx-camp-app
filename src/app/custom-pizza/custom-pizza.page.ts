import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomPizzaState, Topping } from './custom-pizza.state';
import { MatListOption } from '@angular/material';
import { RootState } from '../app.state';
import { AddToBasket } from '../basket/index';
import { Pizza } from '../pizzas/pizza/index';

@Component({
  selector: 'app-custom-pizza',
  templateUrl: './custom-pizza.page.html',
  styleUrls: ['./custom-pizza.page.scss']
})
export class CustomPizzaPage implements OnInit {

  custompizzaState: CustomPizzaState;
  pizza: Pizza;

  constructor(private store: Store<RootState>) {
    this.store.subscribe(s => this.custompizzaState = s.customPizzaState);
    this.store.subscribe(s => this.pizza = s.pizzasState.pizzas.find(p => p.categoryId === '2'));
  }

  getPizza(options: MatListOption[]) {
    const toppings = <Topping[]>options.map(m => m.value);
    const pizza = this.custompizzaState.pizza;
    pizza.toppings = toppings;
    this.store.dispatch(new AddToBasket(pizza));
  }

  ngOnInit() {
  }

}
