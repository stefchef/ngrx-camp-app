import { initialHomeState, HomeState } from './home.state';
import { HomeActions, LOAD_PIZZA, SELECT_CATEGORY, LOAD_CATEGORY, LOAD_TOPPINGS } from './home.actions';



export function homeReducer(state = initialHomeState, action: HomeActions): HomeState {
    switch (action.type) {
        case LOAD_PIZZA:
            return { ...state, pizzas: action.payload };
        case LOAD_CATEGORY:
            return { ...state, categories: action.payload };
        case LOAD_TOPPINGS:
            return { ...state, customPizzaState: { ...state.customPizzaState, toppingOptions: action.payload } };
        case SELECT_CATEGORY:
            const selectedCategory = state.categories.find(c => c.id === action.payload);
            return { ...state, selectedCategoryId: selectedCategory.id };
        default:
            return state;
    }
}
