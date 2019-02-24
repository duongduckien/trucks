import { all } from 'redux-saga/effects';
import commonSaga from './commonSaga';
import trucksSaga from './trucksSaga';
import driversSaga from './driversSaga';

function* rootSaga() {
    yield all([
        ...commonSaga,
        ...trucksSaga,
        ...driversSaga,
    ]);
}

export default rootSaga;