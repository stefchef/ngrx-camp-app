import { Routes } from '@angular/router';

import { LayoutPage } from './layout';

import { homeRoutes } from './home/home.routes';
import { pizzasRoutes } from './pizzas/pizzas.routes';
import { customPizzaRoutes } from './custom-pizza/custom-pizza.routes';
import { checkoutRoutes } from './checkout/checkout.routes';
import { basketRoutes } from './checkout/basket/basket.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutPage,
    children: [
      ...homeRoutes,
      ...basketRoutes,
      ...pizzasRoutes,
      ...customPizzaRoutes,
      ...checkoutRoutes,
    ]
  },
];
