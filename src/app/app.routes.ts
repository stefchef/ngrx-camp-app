import { Routes } from '@angular/router';

import { LayoutPage } from './layout';

import { homeRoutes } from './home/home.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'test/home', pathMatch: 'full' },
  {
    path: 'test',
    component: LayoutPage,
    children: [
      ...homeRoutes,
    ]
  },
];
