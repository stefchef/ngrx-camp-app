import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';


import { RootState } from './app.state';
import { LoadNavigation } from './app.actions';

@Injectable()
export class AppEffects {

    @Effect()
    loadNavigation$: Observable<Action> = this.store
        .first()
        .map(state => {
            console.log(state.appState.navigationEntries);
            if (state.appState.navigationEntries.length > 0) {
                return [];
            }

            return [
            ];
        })
        .flatMap(actions => [new LoadNavigation()]);


    constructor(private actions$: Actions, private store: Store<RootState>, private titleService: Title) { }
}
