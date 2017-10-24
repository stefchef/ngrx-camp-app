import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza.state';
<<<<<<< HEAD
import { MatGridListModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RootState } from '../../../app.state';
import { AddToBasket } from '../../../basket/index';
import { Product } from '../../../basket/basket.state';
=======
>>>>>>> 0da61faca5af3602fe58bf099b7636b5538cfd63

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(private store: Store<RootState>) { }

  private AddToCart(pizzaToAdd: Product) {
    this.store.dispatch(new AddToBasket(pizzaToAdd));
  }

  ngOnInit() {
  }

}
