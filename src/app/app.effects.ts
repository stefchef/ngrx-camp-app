import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';


import { RootState } from './app.state';
import { InMemoryPizzaService } from './inMemoryDataService';
import { LoadPizzas } from './home/index';

@Injectable()
export class AppEffects {

    @Effect()
    loadPizzas$: Observable<Action> = this.store
        .first()
        .map(state => {
            const service = new InMemoryPizzaService();
            const pizzas = service.createDb();

            return pizzas;
        })
        .flatMap(actions => [new LoadPizzas(actions.pizzas)]);


    constructor(private actions$: Actions, private store: Store<RootState>, private titleService: Title) { }
}
