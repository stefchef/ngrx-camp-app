import { Pizza } from './pizzas/pizza';
import { Category } from './categories';

export interface HomeState {
    pizzas: Pizza[];
    categories: Category[];
    selectedCategory: Category;
}

export const initialHomeState: HomeState = {
    pizzas: [],
    categories: [],
    selectedCategory: null,
};
