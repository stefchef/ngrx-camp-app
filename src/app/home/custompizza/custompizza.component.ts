import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../app.state';
import { CustomPizzaState, Topping } from './custompizza.state';
import { MatListOption } from '@angular/material';
import { AddToBasket } from '../../basket/index';

@Component({
  selector: 'app-custompizza',
  templateUrl: './custompizza.component.html',
  styleUrls: ['./custompizza.component.scss']
})
export class CustompizzaComponent implements OnInit {

  @Input() custompizzaState: CustomPizzaState;

  constructor(private store: Store<RootState>) { }

  getPizza(options: MatListOption[]) {
    const toppings = <Topping[]>options.map(m => m.value);
    const pizza = this.custompizzaState.pizza;
    pizza.toppings = toppings;
    this.store.dispatch(new AddToBasket(pizza));
  }

  ngOnInit() {
  }

}
