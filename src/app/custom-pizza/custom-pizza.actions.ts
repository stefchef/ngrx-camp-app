import { Action } from '@ngrx/store';

import { Topping } from './custom-pizza.state';
import { Pizza } from '../pizzas/pizza/index';

export const LOAD_TOPPINGS = 'customPizza/LOAD_TOPPINGS';
export class LoadToppings implements Action {
    readonly type: string = LOAD_TOPPINGS;
    payload?: any;

    constructor(toppings: Topping[]) {
        this.payload = toppings;
    }
}

export const LOAD_CUSTOM_PIZZA = 'customPizza/LOAD_CUSTOM_PIZZA';
export class LoadCustomPizza implements Action {
    readonly type: string = LOAD_CUSTOM_PIZZA;
    payload?: any;

    constructor(customPizza: Pizza) {
        this.payload = customPizza;
    }
}

export type CustomPizzaActions =
    LoadToppings |
    LoadCustomPizza;
