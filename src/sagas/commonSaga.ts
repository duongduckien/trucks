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

export function* modalForm(action: any) {

    try {

        return true;

    } catch (e) {
        console.log(e);
    }

}

export function* watchModalForm() {
    yield takeEvery(types.OPEN_MODAL_FORM, modalForm);
}

const commonSaga = [
    fork(watchShowLoading),
    fork(watchModalForm),
];

export default commonSaga;
