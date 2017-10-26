import { CustomPizzaState, initialCustomPizzaState } from './custom-pizza.state';
import { CustomPizzaActions, LOAD_TOPPINGS } from './custom-pizza.actions';

export function customPizzaReducer(state = initialCustomPizzaState, action: CustomPizzaActions): CustomPizzaState {
    console.log('log');
    switch (action.type) {
        case LOAD_TOPPINGS:
            return { ...state, toppingOptions: action.payload };
        default:
            return state;
    }
}
