import { Action } from '@ngrx/store';

export const LOAD_PIZZA = 'home/LOAD_PIZZA';

export class LoadPizzas implements Action {
    readonly type: string;
    payload?: any;
}


export type HomeActions
= LoadPizzas;
