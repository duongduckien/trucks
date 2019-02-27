import { SHOW_LOADING, OPEN_MODAL, HIDE_MODAL } from './types';

export const showLoading = (data: boolean) => ({
    type: SHOW_LOADING,
    data,
});

export const openModal = (data: any) => ({
    type: OPEN_MODAL,
    data,
});

export const hideModal = (data: any) => ({
    type: HIDE_MODAL,
    data,
});