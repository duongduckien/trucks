import { all } from 'redux-saga/effects';
import { watchShowLoading } from './commonSaga';

function* rootSaga() {
    yield all([
        watchShowLoading(),
    ]);
}

export default rootSaga;