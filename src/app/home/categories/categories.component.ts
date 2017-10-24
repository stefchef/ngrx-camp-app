import { Component, OnInit, Input } from '@angular/core';
import { Category } from './categories.state';
import { Store } from '@ngrx/store';
import { RootState } from '../../app.state';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Category;

  constructor(private store: Store<RootState>) { }

  selectItem(selectedCategoryId: string) {
    console.log(selectedCategoryId);
  }

  ngOnInit() {
  }

}
