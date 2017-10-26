import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../app.state';
import { CustomPizzaState, Topping } from './custompizza.state';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'app-custompizza',
  templateUrl: './custompizza.component.html',
  styleUrls: ['./custompizza.component.scss']
})
export class CustompizzaComponent implements OnInit {

  @Input() custompizzaState: CustomPizzaState;

  constructor() { }

  getPizza(options: MatListOption[]) {
    const toppings = <Topping[]>options.map(m => m.value);
    console.log('Pizza');
    console.log(toppings);
  }

  ngOnInit() {
  }

}
