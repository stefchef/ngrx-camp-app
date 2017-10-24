import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza.state';
import {MatGridListModule} from '@angular/material';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
