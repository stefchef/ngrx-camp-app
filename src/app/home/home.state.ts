import { Category } from './categories';
import { CustomPizzaState } from './custompizza/index';

export interface HomeState {
    customPizzaState: CustomPizzaState;
}

export const initialHomeState: HomeState = {
    customPizzaState: {
        toppingOptions: [],
        pizza: null,
    }
};
