import { Topping } from './custom-pizza.state';
import { Action } from '@ngrx/store';

export const LOAD_TOPPINGS = 'customPizza/LOAD_TOPPINGS';
export class LoadToppings implements Action {
    readonly type: string = LOAD_TOPPINGS;
    payload?: any;

    constructor(toppings: Topping[]) {
        this.payload = toppings;
    }
}

export type CustomPizzaActions =
    LoadToppings;
