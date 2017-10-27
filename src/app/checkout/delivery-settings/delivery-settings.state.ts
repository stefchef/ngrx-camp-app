export interface DeliverySettingsState {
    email: string;
    prename: string;
    surname: string;
    streetAndNumber: string;
    postalCode: number;
    city: string;
}
export const initialDeliverySettingsState: DeliverySettingsState{
    email: '',
    prename: '',
    surname: '',
    postalCode: null,
    streetAndNumber: '',
    city: ''
};
