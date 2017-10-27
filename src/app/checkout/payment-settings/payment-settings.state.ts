export enum CardType {
    Visa,
    AmericanExpress,
    Maestro,
    MasterCard,
}

export interface PaymentSettingsState {
    type: CardType;
    cardNumber: string;
    cardCode: string;
    cardDate: string;
    cardHolderName: string;
}
export const initialPaymentSettingsState: PaymentSettingsState = {
    type: null,
    cardNumber: '',
    cardCode: '',
    cardDate: '',
    cardHolderName: ''
};
