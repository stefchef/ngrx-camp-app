import { Component, OnInit } from '@angular/core';
import { RootState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../home/pizzas/pizza/pizza.state';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss']
})
export class BasketPage implements OnInit {

  basketItems: Pizza[];

  constructor(private store: Store<RootState>) {
    this.store.subscribe(s => {
      this.basketItems = s.basketState.items;
    });

    console.log(this.basketItems);
  }

  ngOnInit() {
  }

}
