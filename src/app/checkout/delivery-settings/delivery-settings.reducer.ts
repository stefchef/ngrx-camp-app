// tslint:disable-next-line:max-line-length
import { DeliverySettingsActions, CHANGE_EMAIL, CHANGE_PRENAME, CHANGE_SURNAME, CHANGE_STREETANDNUMBER, CHANGE_POSTALCODE, CHANGE_CITY } from './delivery-settings.actions';
import { initialDeliverySettingsState, DeliverySettingsState } from './delivery-settings.state';

export function deliverySettingsReducer(state = initialDeliverySettingsState, action: DeliverySettingsActions): DeliverySettingsState {
    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.payload };
        case CHANGE_PRENAME:
            return { ...state, prename: action.payload };
        case CHANGE_SURNAME:
            return { ...state, surname: action.payload };
        case CHANGE_STREETANDNUMBER:
            return { ...state, streetAndNumber: action.payload };
        case CHANGE_POSTALCODE:
            return { ...state, postalCode: action.payload };
        case CHANGE_CITY:
            return { ...state, city: action.payload };
        default:
            return state;
    }
}
