import { RouterState } from '@ngrx/router-store';
import { HomeState } from './home';
import { BasketState } from './basket/basket.state';

export interface RootState {
    appState: AppState;
    router: RouterState;
    homeState: HomeState;
    basketState: BasketState;
}

export interface AppState {
    navigationEntries: string[];
}
