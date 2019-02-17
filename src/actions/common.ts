import { SHOW_LOADING, OPEN_MODAL_FORM } from './types';

export const showLoading = (data: boolean) => ({
    type: SHOW_LOADING,
    data,
});

export const openModalForm = (data: any) => ({
    type: OPEN_MODAL_FORM,
    data,
});