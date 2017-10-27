import { BasketState, initialBasketState, BasketPosition } from './basket.state';
import { BasketActions, ADD_TO_BASKET } from './basket.actions';
import { Pizza } from '../../pizzas/pizza/index';
import { MatSnackBar } from '@angular/material';


export function basketReducer(state = initialBasketState, action: BasketActions): BasketState {
    console.log('Basket reducer called');
    switch (action.type) {
        case ADD_TO_BASKET:
            const pizza = action.payload;
            const existingPizza = state.items.length > 0 ? state.items
                .find(i => i.pizza.id === pizza.id && i.pizza.categoryId === '1'/* This is only necessary for casual pizzas */) : null;
            if (existingPizza) {
                existingPizza.quantity++;
                return state;
            }

            const newPosition: BasketPosition = {
                pizza: <Pizza>action.payload,
                quantity: 1,
                name: '',
            };

            return {
                ...state,
                items: [...state.items, newPosition]
            };
        default:
            return state;
    }
}
