import * as types from '../actions/types';

export interface IDriversState {
    listDrivers: any;
}

export const DRIVERS_INITAL_STATE: IDriversState = {
    listDrivers: [],
};

export function driversReducer(state = DRIVERS_INITAL_STATE, action: any): IDriversState {
    switch (action.type) {
        case types.GET_DRIVERS_SUCCESS: {
            return { ...state, ...{ listDrivers: action.payload.items } };
        }
        default: {
            return state;
        }   
    }
}
