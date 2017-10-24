import { Pizza } from './pizzas/pizza';

export interface HomeState {
    pizzas: Pizza[];
}

export const initialHomeState: HomeState = {
    pizzas: [{ imageUrl: 'asd', id: '1', name: 'Hawaii', description: 'no description' }]
};
