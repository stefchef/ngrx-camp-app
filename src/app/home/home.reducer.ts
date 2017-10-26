import { initialHomeState, HomeState } from './home.state';
import { HomeActions, SELECT_CATEGORY, LOAD_CATEGORY } from './home.actions';

export function homeReducer(state = initialHomeState, action: HomeActions): HomeState {
    return state;
}
