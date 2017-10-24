import { Action } from '@ngrx/store';
import { Pizza } from '../home/pizzas/pizza/index';

export const ADD_TO_BASKET = 'basket/ADD_TO_BASKET';

export class AddToBasket implements Action {
    readonly type: string;
    payload?: any;

    constructor(pizza: Pizza) {
        this.payload = pizza;
        this.type = ADD_TO_BASKET;
    }
}

export type BasketActions =
    AddToBasket;
