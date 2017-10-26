import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CustompizzaComponent } from './custompizza/custompizza.component';

export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomePage,
    },
    {
        path: 'custompizza',
        component: CustompizzaComponent,
    },
];
