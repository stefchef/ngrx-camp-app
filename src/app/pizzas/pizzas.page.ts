import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza/index';
import { RootState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss']
})
export class PizzasPage implements OnInit {
  pizzas: Pizza[];

  constructor(private store: Store<RootState>) {
    this.store.subscribe(s => {
      this.pizzas = s.pizzasState.pizzas;
    });
  }

  ngOnInit() {
  }

}
