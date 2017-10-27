import { RouterState } from '@ngrx/router-store';
import { HomeState } from './home';
import { PizzasState } from './pizzas/pizzas.state';
import { CustomPizzaState } from './custom-pizza';
import { BasketState } from './checkout/basket/basket.state';
import { DeliverySettingsState } from './checkout/delivery-settings/delivery-settings.state';

export interface RootState {
    appState: AppState;
    router: RouterState;
    homeState: HomeState;
    basketState: BasketState;
    pizzasState: PizzasState;
    customPizzaState: CustomPizzaState;
    deliverySettingsState: DeliverySettingsState;
}

export interface AppState {
    navigationEntries: string[];
}
