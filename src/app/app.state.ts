import { RouterState } from '@ngrx/router-store';
import { HomeState } from './home';
import { BasketState } from './basket/basket.state';
import { PizzasState } from './pizzas/pizzas.state';
import { CustomPizzaState } from './custom-pizza';

export interface RootState {
    appState: AppState;
    router: RouterState;
    homeState: HomeState;
    basketState: BasketState;
    pizzasState: PizzasState;
    customPizzaState: CustomPizzaState;
}

export interface AppState {
    navigationEntries: string[];
}
