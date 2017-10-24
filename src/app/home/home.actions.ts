import { Action } from '@ngrx/store';
import { Pizza } from './pizzas/pizza/pizza.state';

export const LOAD_PIZZA = 'home/LOAD_PIZZA';

export class LoadPizzas implements Action {
    readonly type: string = LOAD_PIZZA;
    payload?: any;

    constructor(pizzas: Pizza[]) {
        this.payload = pizzas;
    }
}

export type HomeActions
    = LoadPizzas;
