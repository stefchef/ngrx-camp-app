import { initialHomeState, HomeState } from './home.state';
import { HomeActions, LOAD_PIZZA } from './home.actions';



export function homeReducer(state = initialHomeState, action: HomeActions): HomeState {

    console.log(state);
    switch (action.type) {
        case LOAD_PIZZA:
            return state;
        default:
            return state;
    }
}
