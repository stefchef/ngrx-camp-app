import { Pizza } from '../home/pizzas/pizza/index';

export interface BasketState {
    items: Pizza[];
}

export const initialBasketState: BasketState = {
    items: []
};

export interface Product {
    Id: string;
    quantity: number;
    name: string;
}
