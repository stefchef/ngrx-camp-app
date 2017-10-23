import { Action } from '@ngrx/store';


export const LOAD_NAVIGATION = 'app/load-navigation';
export class LoadNavigation implements Action {
    readonly type = LOAD_NAVIGATION;
}
