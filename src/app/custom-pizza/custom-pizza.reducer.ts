import { CustomPizzaState, initialCustomPizzaState } from './custom-pizza.state';
import { CustomPizzaActions, LOAD_TOPPINGS, LOAD_CUSTOM_PIZZA } from './custom-pizza.actions';

export function customPizzaReducer(state = initialCustomPizzaState, action: CustomPizzaActions): CustomPizzaState {
    switch (action.type) {
        case LOAD_TOPPINGS:
            return { ...state, toppingOptions: action.payload };
        case LOAD_CUSTOM_PIZZA:
            return { ...state, pizza: action.payload };
        default:
            return state;
    }
}
