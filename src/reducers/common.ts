import * as types from '../actions/types';

export interface ICommonState {
    showLoading: boolean;
    openModalForm: any;
}

export const COMMON_INITAL_STATE: ICommonState = {
    showLoading: false,
    openModalForm: {},
};

export function commonReducer(state = COMMON_INITAL_STATE, action: any): ICommonState {
    switch (action.type) {
        case types.SHOW_LOADING: {
            return { ...state, ...{ showLoading: action.data } };
        }
        case types.OPEN_MODAL_FORM: {
            return { ...state, ...{ openModalForm: action.data } };
        }
        default: {
            return state;
        }   
    }
}
