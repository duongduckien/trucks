import { GET_TRUCK_TYPES, GET_TRUCK_TYPES_SUCCESS } from './types';

export const getTruckTypes = () => ({
    type: GET_TRUCK_TYPES,
});

export const getTruckTypesSuccess = ({ items }) => ({
    type: GET_TRUCK_TYPES_SUCCESS,
    payload: {
        items,
    },
});
