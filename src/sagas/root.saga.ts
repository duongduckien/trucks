import { all } from 'redux-saga/effects';
import commonSaga from './common.saga';
import trucksSaga from './trucks.saga';
import driversSaga from './driversSaga';

function* rootSaga() {
    yield all([
        ...commonSaga,
        ...trucksSaga,
        ...driversSaga,
    ]);
}

export default rootSaga;