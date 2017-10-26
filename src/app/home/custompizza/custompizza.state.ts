import { Pizza } from '../pizzas/pizza/index';

export interface CustomPizzaState {
    toppingOptions: Topping[];
    pizza: Pizza;
}

export interface Topping {
    name: string;
    price: number;
    isDefault: boolean;
}
