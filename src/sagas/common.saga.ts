import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';

export function* showLoading(action: any) {

    try {

        return true;

    } catch (err) {
        action.onError(err);
    }

}

export function* watchShowLoading() {
    yield takeEvery(types.SHOW_LOADING, showLoading);
}

export function* modal(action: any) {

    try {

        return true;

    } catch (e) {
        console.log(e);
    }

}

export function* watchModal() {
    yield takeEvery(types.OPEN_MODAL, modal);
}

const commonSaga = [
    fork(watchShowLoading),
    fork(watchModal),
];

export default commonSaga;
