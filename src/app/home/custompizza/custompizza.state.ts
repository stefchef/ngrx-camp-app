export interface CustomPizzaState {
    toppingOptions: Topping[];
}

export interface Topping {
    name: string;
    price: number;
    isDefault: boolean;
}
