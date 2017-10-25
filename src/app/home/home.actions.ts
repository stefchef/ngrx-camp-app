import { Action } from '@ngrx/store';
import { Pizza } from './pizzas/pizza/pizza.state';
import { Category } from './categories/index';
import { Topping } from './custompizza/index';

export const LOAD_PIZZA = 'home/LOAD_PIZZA';
export class LoadPizzas implements Action {
    readonly type: string = LOAD_PIZZA;
    payload?: any;

    constructor(pizzas: Pizza[]) {
        this.payload = pizzas;
    }
}

export const LOAD_CATEGORY = 'home/LOAD_CATEGORY';
export class LoadCategory implements Action {
    readonly type: string = LOAD_CATEGORY;
    payload?: any;

    constructor(categories: Category[]) {
        this.payload = categories;
    }
}

export const LOAD_TOPPINGS = 'home/LOAD_TOPPINGS';
export class LoadToppings implements Action {
    readonly type: string = LOAD_TOPPINGS;
    payload?: any;

    constructor(toppings: Topping[]) {
        this.payload = toppings;
    }
}

export const SELECT_CATEGORY = 'home/SELECT_CATEGORY';
export class SelectCategory implements Action {
    readonly type: string = SELECT_CATEGORY;
    payload?: any;

    constructor(selectedCategroyId: string) {
        this.payload = selectedCategroyId;
    }
}

export type HomeActions =
    LoadPizzas |
    LoadCategory |
    LoadToppings |
    SelectCategory;
