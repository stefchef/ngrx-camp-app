import { RouterState } from '@ngrx/router-store';
import { HomeState } from './home';
import { BasketState } from './basket/basket.state';
import { PizzasState } from './pizzas/pizzas.state';

export interface RootState {
    appState: AppState;
    router: RouterState;
    homeState: HomeState;
    basketState: BasketState;
    pizzasState: PizzasState;
}

export interface AppState {
    navigationEntries: string[];
}
