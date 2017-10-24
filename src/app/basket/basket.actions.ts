import { Action } from '@ngrx/store';
import { Product } from './basket.state';

export const ADD_TO_BASKET = 'basket/ADD_TO_BASKET';

export class AddToBasket implements Action {
    readonly type: string;
    payload?: any;

    constructor(product: Product) {
        this.payload = product;
        this.type = ADD_TO_BASKET;
    }
}

export type BasketActions =
    AddToBasket;
