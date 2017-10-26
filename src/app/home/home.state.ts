import { Pizza } from './pizzas/pizza';
import { Category } from './categories';
import { CustomPizzaState } from './custompizza/index';

export interface HomeState {
    pizzas: Pizza[];
    categories: Category[];
    customPizzaState: CustomPizzaState;
    selectedCategoryId: string;
}

export const initialHomeState: HomeState = {
    pizzas: [],
    categories: [],
    customPizzaState: {
        toppingOptions: [],
    },
    selectedCategoryId: '1',
};
