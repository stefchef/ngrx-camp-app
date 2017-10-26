import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../app.state';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../pizzas/pizza/index';
import { Category } from './categories/index';
import { CustomPizzaState } from './custompizza/custompizza.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  @HostBinding('class.page') true;

  categories$: Observable<Category[]>;
  custompizzaState$: Observable<CustomPizzaState>;
  selectedCategoryId$: Observable<string>;

  constructor(private store: Store<RootState>) {
    this.categories$ = this.store.select(s => s.homeState.categories);
    this.selectedCategoryId$ = this.store.select(s => s.homeState.selectedCategoryId);
    this.custompizzaState$ = this.store.select(s => s.homeState.customPizzaState);
  }

  ngOnInit() {
  }

}
