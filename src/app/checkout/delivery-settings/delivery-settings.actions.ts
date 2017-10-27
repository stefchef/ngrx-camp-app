import { Action } from '@ngrx/store';

export const CHANGE_EMAIL = 'delivery-settings/CHANGE_EMAIL';
export class ChangeEmail implements Action {
    readonly type: string = CHANGE_EMAIL;
    payload?: any;

    constructor(text: string) {
        this.payload = text;
    }
}

export const CHANGE_PRENAME = 'delivery-settings/CHANGE_PRENAME';
export class ChangePrename implements Action {
    readonly type: string = CHANGE_PRENAME;
    payload?: any;

    constructor(text: string) {
        this.payload = text;
    }
}

export const CHANGE_SURNAME = 'delivery-settings/CHANGE_SURNAME';
export class ChangeSurname implements Action {
    readonly type: string = CHANGE_SURNAME;
    payload?: any;

    constructor(text: string) {
        this.payload = text;
    }
}

export const CHANGE_STREETANDNUMBER = 'delivery-settings/CHANGE_STREETANDNUMBER';
export class ChangeStreetAndNumber implements Action {
    readonly type: string = CHANGE_STREETANDNUMBER;
    payload?: any;

    constructor(text: string) {
        this.payload = text;
    }
}

export const CHANGE_POSTALCODE = 'delivery-settings/CHANGE_POSTALCODE';
export class ChangePostalCode implements Action {
    readonly type: string = CHANGE_POSTALCODE;
    payload?: any;

    constructor(text: string) {
        this.payload = text;
    }
}

export const CHANGE_CITY = 'delivery-settings/CHANGE_CITY';
export class ChangeCity implements Action {
    readonly type: string = CHANGE_CITY;
    payload?: any;

    constructor(text: string) {
        this.payload = text;
    }
}

export type DeliverySettingsActions =
    ChangeEmail |
    ChangePrename |
    ChangeSurname |
    ChangeStreetAndNumber |
    ChangePostalCode |
    ChangeCity;
