import { Topping } from '../../custompizza/index';

export interface Pizza {
    imageUrl: string;
    id: string;
    name: string;
    description: string;
    categoryId: string;
    price: number;
    toppings: Topping[];
}
