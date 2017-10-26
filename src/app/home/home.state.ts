import { Category } from './categories';
import { CustomPizzaState } from './custompizza/index';

export interface HomeState {
    categories: Category[];
    customPizzaState: CustomPizzaState;
    selectedCategory: Category;
}

export const initialHomeState: HomeState = {
    categories: [],
    customPizzaState: {
        toppingOptions: [],
    },
    selectedCategory: undefined,
};
