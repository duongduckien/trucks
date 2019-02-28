import { GET_CARGO_TYPES, GET_CARGO_TYPES_SUCCESS, GET_TRUCK_STATUS, GET_TRUCK_STATUS_SUCCESS } from './types';

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