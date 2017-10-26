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
                price: 10,
                toppings: []
            },
            {
                id: '2',
                name: 'Stromboli',
                imageUrl: '../assets/pizza/strumbolli.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '3',
                name: 'Napoli',
                imageUrl: '../assets/pizza/nepal.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '4',
                name: 'Prosciutto',
                imageUrl: '../assets/pizza/proschutt.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '5',
                name: 'Funghi',
                imageUrl: '../assets/pizza/funggi.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '8',
                name: 'Rustica',
                imageUrl: '../assets/pizza/rustikal.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '9',
                name: 'Salame',
                imageUrl: '../assets/pizza/salamimimi.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '10',
                name: 'Beat',
                imageUrl: '../assets/pizza/beat.jpg',
                description: 'no description',
                categoryId: '1',
                price: 10,
                toppings: []
            },
            {
                id: '11',
                name: 'Wunschpizza',
                imageUrl: '../assets/pizza/beat.jpg',
                description: 'no description',
                categoryId: '2',
                price: 10,
                toppings: []
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
                price: 0,
                isDefault: true,
            },
            {
                name: 'Mozarella',
                price: 0,
                isDefault: true,
            },
            {
                name: 'Oregano',
                price: 0,
                isDefault: true,
            },
            {
                name: 'Salami',
                price: 0,
                isDefault: false,
            },
            {
                name: 'Hot Salami',
                price: 0,
                isDefault: false,
            },
            {
                name: 'Bacon',
                price: 0,
                isDefault: false,
            },
            {
                name: 'Ham',
                price: 0,
                isDefault: false,
            },
            {
                name: 'Unidentified meat.',
                price: 0,
                isDefault: false,
            },
        ];

        return { toppings };
    }
}

