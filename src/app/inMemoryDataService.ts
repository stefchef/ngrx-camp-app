import { Pizza } from './pizzas/pizza/index';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { Category } from './home/categories/index';
import { Topping } from './home/custompizza/index';

export class InMemoryPizzaService implements InMemoryDbService {
    createDb() {
        const pizzas: Pizza[] = [
            {
                id: '1',
                name: 'Margherita',
                imageUrl: '../assets/pizza/margarite.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '2',
                name: 'Stromboli',
                imageUrl: '../assets/pizza/strumbolli.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '3',
                name: 'Napoli',
                imageUrl: '../assets/pizza/nepal.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '4',
                name: 'Prosciutto',
                imageUrl: '../assets/pizza/proschutt.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '5',
                name: 'Funghi',
                imageUrl: '../assets/pizza/funggi.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '8',
                name: 'Rustica',
                imageUrl: '../assets/pizza/rustikal.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '9',
                name: 'Salame',
                imageUrl: '../assets/pizza/salamimimi.jpg',
                description: 'no description',
                categoryId: '1',
            },
            {
                id: '10',
                name: 'Beat',
                imageUrl: '../assets/pizza/beat.jpg',
                description: 'no description',
                categoryId: '1',
            }
        ];

        return { pizzas };
    }
}

export class InMemoryCategoryService implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {
                id: '1',
                name: 'Pizza',
            },
            {
                id: '2',
                name: 'Wunschpizza'
            }
        ];

        return { categories };
    }
}

export class InMemoryToppingService implements InMemoryDbService {
    createDb() {
        const toppings: Topping[] = [
            {
                name: 'Tomatosauce',
                isDefault: true,
            },
            {
                name: 'Mozarella',
                isDefault: true,
            },
            {
                name: 'Oregano',
                isDefault: true,
            },
            {
                name: 'Salami',
                isDefault: false,
            },
            {
                name: 'Hot Salami',
                isDefault: false,
            },
            {
                name: 'Bacon',
                isDefault: false,
            },
            {
                name: 'Ham',
                isDefault: false,
            },
            {
                name: 'Unidentified meat.',
                isDefault: false,
            },
        ];

        return { toppings };
    }
}

