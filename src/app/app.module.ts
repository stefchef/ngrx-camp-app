import 'rxjs/Rx'; // Used for rxjs operators like first.

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { environment } from '../environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryPizzaService } from './inMemoryDataService';

import { PizzasModule } from './pizzas/pizzas.module';
import { CustomPizzaModule } from './custom-pizza/custom-pizza.module';
import { BasketModule } from './basket/basket.module';
import { CheckoutModule } from './checkout/checkout.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(rootReducer, initialRootState),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AppEffects),
    LayoutModule,
    HomeModule,
    PizzasModule,
    CustomPizzaModule,
    BasketModule,
    CheckoutModule,
    ...environment.useInMemoryWebApi ? [InMemoryWebApiModule.forRoot(InMemoryPizzaService, { delay: 1000 })] : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
