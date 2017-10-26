import { Category } from './categories';
import { CustomPizzaState } from './custompizza/index';

export interface HomeState {
    categories: Category[];
    customPizzaState: CustomPizzaState;
    selectedCategoryId: string;
}

export const initialHomeState: HomeState = {
    categories: [],
    customPizzaState: {
        toppingOptions: [],
    },
    selectedCategoryId: '1',
};
