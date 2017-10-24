import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza/index';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  @Input() pizzas: Pizza[];

  constructor() { }

  ngOnInit() {
  }

}
