import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as driversActions from '../actions/drivers.action';

// Services
import { API } from '../services/api';

const api = new API();

export function* getDrivers() {

    try {

        const result = yield call(api.getDrivers);
        yield put(driversActions.getDriversSuccess({
            items: result.data,
        }));

        return true;

    } catch (err) {
        console.log(err);
    }

}

export function* watchGetDrivers() {
    yield takeEvery(types.GET_DRIVERS, getDrivers);
}

const driversSaga = [
    fork(watchGetDrivers),
];

export default driversSaga;
