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

export function* openModalForm(action: any) {

    try {

        console.log(action);
        return true;

    } catch (e) {
        console.log(e);
    }

}

export function* watchOpenModalForm() {
    yield takeEvery(types.OPEN_MODAL_FORM, openModalForm);
}
