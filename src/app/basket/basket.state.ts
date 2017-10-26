import { Pizza } from '../pizzas/pizza/index';

export interface BasketState {
    items: BasketPosition[];
}

export const initialBasketState: BasketState = {
    items: []
};

export interface BasketPosition {
    pizza: Pizza;
    quantity: number;
    name: string;
}
