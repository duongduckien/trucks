import { GET_DRIVERS, GET_DRIVERS_SUCCESS } from './types';

export const getDrivers = () => ({
    type: GET_DRIVERS,
});

export const getDriversSuccess = ({ items }) => ({
    type: GET_DRIVERS_SUCCESS,
    payload: {
        items,
    },
});
