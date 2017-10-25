export interface CustomPizzaState {
    toppingOptions: Topping[];
}

export interface CustomPizza {
    id: string;
    toppings: Topping[];
}

export interface Topping {
    name: string;
    price: number;
    isDefault: boolean;
}
