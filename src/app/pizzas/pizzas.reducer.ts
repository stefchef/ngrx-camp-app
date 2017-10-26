import { PizzasActions, LOAD_PIZZA } from './pizzas.actions';
import { initialPizzasState, PizzasState } from './pizzas.state';

export function pizzasReducer(state = initialPizzasState, action: PizzasActions): PizzasState {
    switch (action.type) {
        case LOAD_PIZZA:
            return { ...state, pizzas: action.payload };
        default:
            return state;
    }
}
