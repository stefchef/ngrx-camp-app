import { Pizza } from './pizzas/pizza';

export interface HomeState {
    pizzas: Pizza[];
}

export const initialHomeState: HomeState = {
    pizzas: []
};

export interface Category {
    name: string;
    id: string;
}
