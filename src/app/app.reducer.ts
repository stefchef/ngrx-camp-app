import { RootState, AppState } from './app.state';
import { Actions } from '@ngrx/effects';
import { compose } from '@ngrx/core';
import { Action, Reducer, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { homeReducer } from './home/index';
import { pizzasReducer } from './pizzas/index';
import { customPizzaReducer } from './custom-pizza/custom-pizza.reducer';
import { basketReducer } from './checkout/basket/index';

// we define the initial route state to point to our default route
export const initialRootState = {
    router: {
        path: `/test}`
    },
};

export const initialAppState = {
    navigationEntries: [],
};

export function appReducer(state: AppState = initialAppState, action: Action): AppState {
    switch (action.type) {
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;
        default:
            return state;
    }
}

const reducers = {
    router: routerReducer,
    appState: appReducer,
    homeState: homeReducer,
    basketState: basketReducer,
    pizzasState: pizzasReducer,
    customPizzaState: customPizzaReducer,
};

const ehancers = [
    combineReducers,
];

const reducer = <any>compose(...ehancers)(reducers);

export function rootReducer(state: RootState, action: any) {
    return reducer(state, action);
}
