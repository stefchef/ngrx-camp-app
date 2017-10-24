import { initialHomeState, HomeState } from './home.state';
import { HomeActions, LOAD_PIZZA, SELECT_CATEGORY } from './home.actions';



export function homeReducer(state = initialHomeState, action: HomeActions): HomeState {
    switch (action.type) {
        case LOAD_PIZZA:
            return { ...state, pizzas: action.payload };
        case SELECT_CATEGORY:
            const selectedCategory = state.categories.find(c => c.id === action.payload);
            return {...state, selectedCategory: selectedCategory};
        default:
            return state;
    }
}
