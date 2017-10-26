import { Component, OnInit, Input } from '@angular/core';
import { Category } from './categories.state';
import { Store } from '@ngrx/store';
import { RootState } from '../../app.state';
import { SelectCategory } from '../home.actions';
import { Pizza } from '../../pizzas/pizza/pizza.state';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Category;
  @Input() customPizza: Pizza;

  constructor(private store: Store<RootState>) { }

  selectItem(selectedCategoryId: string) {
    this.store.dispatch(new SelectCategory(selectedCategoryId));
  }

  ngOnInit() {
  }
}
