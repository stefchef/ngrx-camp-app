import { BasketState, initialBasketState } from './basket.state';
import { BasketActions, ADD_TO_BASKET } from './basket.actions';


export function basketReducer(state = initialBasketState, action: BasketActions): BasketState {
    console.log('Basket reducer called');
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}
