import { Pizza } from './pizzas/pizza';

export interface HomeState {
    pizzas: Pizza[];
}

export const initialHomeState: HomeState = {
    pizzas: [
        { imageUrl: 'http://www.dieci.ch/kurier/images/1.jpg', id: '1', name: 'Margherita', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/2.jpg', id: '2', name: 'Stromboli', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/3.jpg', id: '3', name: 'Napoli', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/4.jpg', id: '4', name: 'Prosciutto', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/5.jpg', id: '5', name: 'Funghi', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/8.jpg', id: '8', name: 'Rustica', description: 'no description' },
        { imageUrl: 'http://www.dieci.ch/kurier/images/9.jpg', id: '9', name: 'Salame', description: 'no description' },
        { imageUrl: 'http://www.bryan-albrecht.ch/beat.png', id: '9', name: 'Beat', description: 'no description' }
    ]
};
