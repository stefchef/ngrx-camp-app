import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../app.state';
import { CustomPizzaState } from './custompizza.state';

@Component({
  selector: 'app-custompizza',
  templateUrl: './custompizza.component.html',
  styleUrls: ['./custompizza.component.scss']
})
export class CustompizzaComponent implements OnInit {

  @Input() custompizzaState: CustomPizzaState;

  constructor() { }

  ngOnInit() {
  }

}
