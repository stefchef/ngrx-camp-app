import { Component, OnInit, HostBinding } from '@angular/core';
import { RootState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../pizzas/pizza/pizza.state';
import { BasketPosition } from './basket.state';
import { SomeState } from './delivery-settings/delivery-settings.state';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss']
})
export class BasketPage implements OnInit {
  @HostBinding('class.page') true;

  basketItems: BasketPosition[];
  basketDataSource: BasketDataSource;
  columns = ['name', 'quantity'];
  constructor(private store: Store<RootState>) {
    this.store.subscribe(s => {
      this.basketItems = s.basketState.items;
    });
    this.basketDataSource = new BasketDataSource(this.basketItems);
    const t = <SomeState>{};
  }

  ngOnInit() {
  }

}
export class BasketDataSource extends DataSource<any> {
  basketItems$: Observable<BasketPosition[]>;
  constructor(private basketItems: BasketPosition[]) {
    super();
    this.basketItems$ = Observable.of(basketItems);
  }
  connect(collectionViewer: CollectionViewer): Observable<BasketPosition[]> {
    return this.basketItems$;
  }
  disconnect(collectionViewer: CollectionViewer): void {
  }

}
