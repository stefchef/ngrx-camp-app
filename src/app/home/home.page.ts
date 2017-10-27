import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../app.state';
import { Pizza } from '../pizzas/pizza/index';
import { CustomPizzaState } from '../custom-pizza/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  @HostBinding('class.page') true;

  constructor() {
  }

  ngOnInit() {
  }

}
