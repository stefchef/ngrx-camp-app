import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza/index';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  @Input() pizzas: Pizza[];
  pizzasInFocus: Pizza[];

  constructor() { }

  ngOnInit() {
    this.pizzasInFocus = this.pizzas.filter(p => p.categoryId === '1');
  }

}
