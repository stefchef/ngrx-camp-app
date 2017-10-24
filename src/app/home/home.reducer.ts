import { initialHomeState, HomeState } from './home.state';
import { HomeActions, LOAD_PIZZA } from './home.actions';



export function homeReducer(state = initialHomeState, action: HomeActions): HomeState {
    switch (action.type) {
        case LOAD_PIZZA:
            console.log('load pizza called');
            return {...state, pizzas: action.payload};
        default:
            return state;
    }
}
