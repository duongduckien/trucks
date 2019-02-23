import { all } from 'redux-saga/effects';
import commonSaga from './common';
import trucksSaga from './trucks';

function* rootSaga() {
    yield all([
        ...commonSaga,
        ...trucksSaga,
    ]);
}

export default rootSaga;