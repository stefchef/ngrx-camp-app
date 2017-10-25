export interface CustomPizza {
    id: string;
    toppings: Topping[];
}

export interface Topping {
    name: string;
    isDefault: boolean;
}
