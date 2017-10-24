import 'rxjs/Rx'; // Used for rxjs operators like first.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './app.reducer';
import { initialRootState } from './app.reducer';
import { HomePage } from './home/home.page';
import { HomeModule } from './home/home.module';
import { LayoutModule, LayoutPage } from './layout';
import { BasketPage } from './basket/basket.page';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPage,
    HomePage,
    BasketPage,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(rootReducer, initialRootState),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AppEffects),
    LayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
