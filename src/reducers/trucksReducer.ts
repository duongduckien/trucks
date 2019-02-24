import * as types from '../actions/types';

export interface ITrucksState {
    truckTypes: any;
}

export const TRUCKS_INITAL_STATE: ITrucksState = {
    truckTypes: [],
};

export function trucksReducer(state = TRUCKS_INITAL_STATE, action: any): ITrucksState {
    switch (action.type) {
        case types.GET_TRUCK_TYPES_SUCCESS: {
            return { ...state, ...{ truckTypes: action.payload.items } };
        }
        default: {
            return state;
        }   
    }
}
