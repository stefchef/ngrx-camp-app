import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../app.state';
import { BasketPosition } from '../checkout/basket/basket.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss']
})
export class LayoutPage implements OnInit {
  basketItems: BasketPosition[];
  get basketItemCount() {
    let count = 0;
    this.basketItems.forEach(a => count += a.quantity);
    return count;
  }

  constructor(private activatedRoute: ActivatedRoute, private store: Store<RootState>) {
    this.store.subscribe(s => {
      this.basketItems = s.basketState.items;
    });
  }

  ngOnInit() {
  }

}
