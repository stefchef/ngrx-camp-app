import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';


import { RootState } from './app.state';
import { InMemoryPizzaService, InMemoryCategoryService } from './inMemoryDataService';
import { LoadPizzas, LoadCategory } from './home/index';

@Injectable()
export class AppEffects {

    @Effect()
    loadPizzas$: Observable<Action> = this.store
        .first()
        .map(state => {
            console.log('loading pizzas...');
            const service = new InMemoryPizzaService();
            const pizzas = service.createDb();

            return pizzas;
        })
        .flatMap(actions => [new LoadPizzas(actions.pizzas)]);

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


    constructor(private actions$: Actions, private store: Store<RootState>, private titleService: Title) { }
}
