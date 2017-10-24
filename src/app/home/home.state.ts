import { Pizza } from './pizzas/pizza';
import { Category } from './category';

export interface HomeState {
    pizzas: Pizza[];
    categories: Category[];
}

export const initialHomeState: HomeState = {
    pizzas: [],
    categories: [],
};
