import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as trucksActions from '../actions/trucks.action';

// Services
import { API } from '../services/api';

const api = new API();

export function* getTruckTypes() {

    try {

        const result = yield call(api.getTruckTypes);
        yield put(trucksActions.getCargoTypeSuccess({
            items: result.data,
        }));

    } catch (e) {
        console.log(e);
    }

}

export function* watchGetTruckTypesRequest() {
    yield takeEvery(types.GET_CARGO_TYPES, getTruckTypes);
}

export function* getTruckStatus() {

    try {

        const result = yield call(api.getTruckStatus);
        yield put(trucksActions.getTruckStatusSuccess({
            items: result.data,
        }));

    } catch (e) {
        console.log(e);
    }

}

export function* watchGetTruckStatusRequest() {
    yield takeEvery(types.GET_TRUCK_STATUS, getTruckStatus);
}

const trucksSaga = [
    fork(watchGetTruckTypesRequest),
    fork(watchGetTruckStatusRequest),
];

export default trucksSaga;
