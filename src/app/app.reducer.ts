import { RootState, AppState } from './app.state';
import { Actions } from '@ngrx/effects';
import { compose } from '@ngrx/core';
import { Action, Reducer, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

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
    console.log(state);

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
};

const ehancers = [
    combineReducers,
];

const reducer = <any>compose(...ehancers)(reducers);

export function rootReducer(state: RootState, action: any) {
    return reducer(state, action);
}
