import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../app.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss']
})
export class LayoutPage implements OnInit {
  basketItemCount: number;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<RootState>) {
    this.store.subscribe(s => {
      this.basketItemCount = s.basketState.items.length;
    });
  }

  ngOnInit() {
  }

}
