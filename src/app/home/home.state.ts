import { Pizza } from './pizzas/pizza';

export interface HomeState {
    pizzas: Pizza[];
}

export const initialHomeState: HomeState = {
    pizzas: [
        { imageUrl: 'http://www.dieci.ch/kurier/images/5.jpg', id: '1', name: 'Margherita', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/6.jpg', id: '1', name: 'Stromboli', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/7.jpg', id: '1', name: 'Napoli', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/8.jpg', id: '1', name: 'Prosciutto', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/9.jpg', id: '1', name: 'Funghi', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/10.jpg', id: '1', name: 'Rustica', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/11.jpg', id: '1', name: 'Salame', description: 'no description' }
    ]
};
