import { Pizza } from './home/pizzas/pizza/index';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const pizzas: Pizza[] = [
        {
            id: '1',
            name: 'Margherita',
            imageUrl: 'http://www.dieci.ch/kurier/images/1.jpg',
            description: 'no description'
        },
        {
            id: '2',
            name: 'Stromboli',
            imageUrl: 'http://www.dieci.ch/kurier/images/2.jpg',
            description: 'no description'
        },
        {
            id: '3',
            name: 'Napoli',
            imageUrl: 'http://www.dieci.ch/kurier/images/3.jpg',
            description: 'no description'
        },
        {
            id: '4',
            name: 'Prosciutto',
            imageUrl: 'http://www.dieci.ch/kurier/images/4.jpg',
            description: 'no description'
        },
        {
            id: '5',
            name: 'Funghi',
            imageUrl: 'http://www.dieci.ch/kurier/images/5.jpg',
            description: 'no description'
        },
        {
            id: '8',
            name: 'Rustica',
            imageUrl: 'http://www.dieci.ch/kurier/images/8.jpg',
            description: 'no description'
        },
        {
            id: '9',
            name: 'Salame',
            imageUrl: 'http://www.dieci.ch/kurier/images/9.jpg',
            description: 'no description'
        },
        {
            id: '10',
            name: 'Beat',
            imageUrl: 'http://www.bryan-albrecht.ch/beat.jpg',
            description: 'no description'
        }
    ];

    return {pizzas };
    }
}
