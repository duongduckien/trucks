import { 
    GET_CARGO_TYPES, 
    GET_CARGO_TYPES_SUCCESS, 
    GET_TRUCK_STATUS, 
    GET_TRUCK_STATUS_SUCCESS,
    CREATE_TRUCK,
    GET_TRUCKS,
    GET_TRUCKS_SUCCESS,
    SEARCH_TRUCKS,
    CHANGE_CURRENT_PAGE,
} from './types';

export const getCargoTypes = () => ({
    type: GET_CARGO_TYPES,
});

export const getCargoTypeSuccess = ({ items }) => ({
    type: GET_CARGO_TYPES_SUCCESS,
    payload: {
        items,
    },
});

export const getTruckStatus = () => ({
    type: GET_TRUCK_STATUS,
});

export const getTruckStatusSuccess = ({ items }) => ({
    type: GET_TRUCK_STATUS_SUCCESS,
    payload: {
        items,
    },
});

export const createTruck = (params: any) => ({
    type: CREATE_TRUCK,
    payload: params,
});

export const getTrucks = () => ({
    type: GET_TRUCKS,
});

export const getTrucksSuccess = ({ items }) => ({
    type: GET_TRUCKS_SUCCESS,
    payload: {
        items,
    },
});

export const searchTrucks = (value: any) => ({
    type: SEARCH_TRUCKS,
    payload: value,
});

export const changeCurrentPage = (value: any) => ({
    type: CHANGE_CURRENT_PAGE,
    payload: value,
});