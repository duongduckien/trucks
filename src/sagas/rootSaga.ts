import { all } from 'redux-saga/effects';
import { watchShowLoading, watchOpenModalForm } from './commonSaga';

function* rootSaga() {
    yield all([
        watchShowLoading(),
        watchOpenModalForm(),
    ]);
}

export default rootSaga;