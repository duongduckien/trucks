import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as trucksActions from '../actions/trucks';

// Services
import { API } from '../services/api';

const api = new API();

export function* getTruckTypes() {

    try {

        const result = yield call(api.getTruckTypes);
        yield put(trucksActions.getTruckTypesSuccess({
            items: result.data,
        }));

        return true;

    } catch (err) {
        console.log(err);
    }

}

export function* watchGetTruckTypesRequest() {
    yield takeEvery(types.GET_TRUCK_TYPES, getTruckTypes);
}

const trucksSaga = [
    fork(watchGetTruckTypesRequest),
];

export default trucksSaga;
