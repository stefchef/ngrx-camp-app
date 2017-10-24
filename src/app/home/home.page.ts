import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../app.state';
import { Observable } from 'rxjs/Observable';
import { Pizza } from './pizzas/pizza/index';
import { Category } from './categories/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  pizzas$: Observable<Pizza[]>;
  categories$: Observable<Category[]>;

  constructor(private store: Store<RootState>) {
    this.pizzas$ = this.store.select(s => s.homeState.pizzas);
    this.categories$ = this.store.select(s => s.homeState.categories);
  }

  ngOnInit() {
  }

}
