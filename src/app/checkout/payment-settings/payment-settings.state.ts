export enum CardType {
    Dafault,
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
    type: CardType.Dafault,
    cardNumber: '',
    cardCode: '',
    cardDate: '',
    cardHolderName: ''
};
