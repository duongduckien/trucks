import * as types from '../actions/types';

export interface ITrucksState {
    cargoTypes: any;
    truckStatus: any;
    listTrucks: any;
    searchTrucks: string;
    currentPage: number;
}

export const TRUCKS_INITAL_STATE: ITrucksState = {
    cargoTypes: [],
    truckStatus: [],
    listTrucks: [],
    searchTrucks: '',
    currentPage: 1,
};

export function trucksReducer(state = TRUCKS_INITAL_STATE, action: any): ITrucksState {
    switch (action.type) {
        case types.GET_CARGO_TYPES_SUCCESS: {
            return { ...state, ...{ cargoTypes: action.payload.items } };
        }
        case types.GET_TRUCK_STATUS_SUCCESS: {
            return { ...state, ...{ truckStatus: action.payload.items } };
        }
        case types.GET_TRUCKS_SUCCESS: {
            return { ...state, ...{ listTrucks: action.payload.items } };
        }
        case types.SEARCH_TRUCKS: {
            return { ...state, ...{ searchTrucks: action.payload } };
        }
        case types.CHANGE_CURRENT_PAGE: {
            return { ...state, ...{ currentPage: action.payload } };
        }
        default: {
            return state;
        }   
    }
}
