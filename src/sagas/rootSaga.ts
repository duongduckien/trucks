import { all } from 'redux-saga/effects';
import { watchShowLoading, watchModalForm } from './commonSaga';

function* rootSaga() {
    yield all([
        watchShowLoading(),
        watchModalForm(),
    ]);
}

export default rootSaga;