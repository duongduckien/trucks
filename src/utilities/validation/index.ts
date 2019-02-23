// Languages
import i18n from '../i18n';

export class Validation {

    public truckValidate: any;

    constructor() {
        this.setTruckRules();
    }

    /**
     * Function set rules for truck
     */
    setTruckRules() {
        this.truckValidate = {
            truckPlate: {
                required: {
                    message: i18n.t('TRUCK_PLATE'),
                },
                format: {
                    pattern: /^[1-9][0-9][A-Z]{1}-[0-9]{5}/,
                    message: i18n.t('TRUCK_PLATE_FORMAT'),
                },
            },
            cargoType: {
                required: {
                    message: i18n.t('CARGO_TYPE_REQUIRED'),
                },
                arrayLength: {
                    value: 10,
                    message:  i18n.t('CARGO_TYPE_MAXIMUM'),
                },
            },
            driver: {

            },
            truckType: {

            },
            price: {
                required: {
                    message: i18n.t('PRICE_REQUIRED'),
                },
                number: {
                    pattern: /[0-9]/,
                    message: i18n.t('PRICE_NUMBER'),
                },
            },
            dimension: {

            },
            parkingAddress: {
                textLength: {
                    value: 500,
                    message: i18n.t('PARKING_ADDRESS_MAX_LENGTH'),
                },
            },
            productionYear: {

            },
            status: {
                required: {
                    message: i18n.t('STATUS_REQUIRED'),
                },
            },
            description: {
                textLength: {
                    value: 200,
                    message: i18n.t('DESCRIPTION_MAX_LENGTH'),
                },
            },
        };
    }

    /**
     * Function validate fields
     * @param  {any} nameField
     * @param  {any} value
     */
    validate(rules: any, nameField: any, value: any, compareValue?: any) {

        if (rules.hasOwnProperty(nameField)) {

            const v = rules[nameField];

            if (v.hasOwnProperty('required') && (value === '' || value === null)) {

                return { isErr: true, msgErr: v.required.message };

            } else if (v.hasOwnProperty('format') && !v.format.pattern.test(value)) {

                return { isErr: true, msgErr: v.format.message };

            } else if (v.hasOwnProperty('number') && !v.number.pattern.test(value)) {

                return { isErr: true, msgErr: v.number.message };

            } else if (v.hasOwnProperty('arrayLength') && !v.upperCase.pattern.test(value)) {

                return { isErr: true, msgErr: v.upperCase.message };

            } else if (v.hasOwnProperty('lowerCase') && !v.lowerCase.pattern.test(value)) {

                return { isErr: true, msgErr: v.lowerCase.message };

            } else if (v.hasOwnProperty('minLength') && value.length < v.minLength.value) {

                return { isErr: true, msgErr: v.minLength.message };

            } else if (v.hasOwnProperty('maxLength') && value.length > v.maxLength.value) {

                return { isErr: true, msgErr: v.maxLength.message };

            } else if (v.hasOwnProperty('match') && value !== compareValue) {

                return { isErr: true, msgErr: v.match.message };

            } else {

                return { isErr: false, msgErr: '' };

            }

        } else {

            return { isErr: false, msgErr: '' };

        }

    }

}
