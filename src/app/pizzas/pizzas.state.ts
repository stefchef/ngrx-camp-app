import { Pizza } from './pizza/pizza.state';

export interface PizzasState {
    pizzas: Pizza[];
}
export const initialPizzasState: PizzasState = {
    pizzas: [],
};

