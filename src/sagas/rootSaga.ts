import { all } from 'redux-saga/effects';
import commonSaga from './commonSaga';
import trucksSaga from './trucksSaga';

function* rootSaga() {
    yield all([
        ...commonSaga,
        ...trucksSaga,
    ]);
}

export default rootSaga;