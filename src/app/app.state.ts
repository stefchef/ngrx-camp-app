import { RouterState } from '@ngrx/router-store';
import { HomeState } from './home';

export interface RootState {
    appState: AppState;
    router: RouterState;
    homeState: HomeState;
}

export interface AppState {
    navigationEntries: string[];
}
