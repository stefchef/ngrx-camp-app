import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';

import { RootState } from './app.state';
import { InMemoryPizzaService, InMemoryCategoryService, InMemoryToppingService } from './inMemoryDataService';
import { LoadCategory } from './home/index';
import { LoadPizzas } from './pizzas/pizzas.actions';
import { LoadToppings, LoadCustomPizza } from './custom-pizza/custom-pizza.actions';

@Injectable()
export class AppEffects {

    @Effect()
    loadPizzas$: Observable<Action> = this.store
        .first()
        .map(state => {
            console.log('loading pizzas...');
            const service = new InMemoryPizzaService();
            const pizzas = service.getPizzasByCategoryId('1' /* Category 1 are all normal pizzas */);

            return pizzas;
        })
        .flatMap(actions => [new LoadPizzas(actions.pizzas)]);

    @Effect()
    loadCustomPizza$: Observable<Action> = this.store
        .first()
        .map(state => {
            console.log('loading pizzas...');
            const service = new InMemoryPizzaService();
            const pizzas = service.getPizzasByCategoryId('2' /* Category 2 are custom pizzas */);
            if (pizzas.pizzas.length > 0) {
                return pizzas.pizzas[0];
            }

            return null;
        })
        .flatMap(actions => [new LoadCustomPizza(actions)]);

    @Effect()
    loadCatgories$: Observable<Action> = this.store
        .first()
        .map(state => {
            console.log('loading categories...');
            const service = new InMemoryCategoryService();
            const categories = service.createDb();

            return categories;
        })
        .flatMap(actions => [new LoadCategory(actions.categories)]);

    @Effect()
    loadToppings$: Observable<Action> = this.store
        .first()
        .map(state => {
            console.log('loading toppings...');
            const service = new InMemoryToppingService();
            const toppings = service.createDb();

            return toppings;
        })
        .flatMap(actions => [new LoadToppings(actions.toppings)]);


    constructor(private actions$: Actions, private store: Store<RootState>, private titleService: Title) { }
}
