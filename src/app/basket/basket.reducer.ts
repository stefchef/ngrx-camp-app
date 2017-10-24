import { BasketState, initialBasketState, BasketPosition } from './basket.state';
import { BasketActions, ADD_TO_BASKET } from './basket.actions';
import { Pizza } from '../home/pizzas/pizza/index';


export function basketReducer(state = initialBasketState, action: BasketActions): BasketState {
    console.log('Basket reducer called');
    switch (action.type) {
        case ADD_TO_BASKET:
            const pizza = action.payload;
            console.log(pizza);
            const existingPizza = state.items.length > 0 ? state.items.find(i => i.pizza.id === pizza.id) : null;
            console.log(existingPizza);
            if (existingPizza) {
                console.log('pizza exists');
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
