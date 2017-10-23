import { RouterState } from '@ngrx/router-store';

export interface RootState {
    appState: AppState;
    router: RouterState;
}

export interface AppState {
    navigationEntries: string[];
}
