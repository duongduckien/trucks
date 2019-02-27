import * as types from '../actions/types';

export interface ICommonState {
    showLoading: boolean;
    modal: any;
}

export const COMMON_INITAL_STATE: ICommonState = {
    showLoading: false,
    modal: {
        show: false,
        component: '',
    },
};

export function commonReducer(state = COMMON_INITAL_STATE, action: any): ICommonState {
    switch (action.type) {
        case types.SHOW_LOADING: {
            return { ...state, ...{ showLoading: action.data } };
        }
        case types.OPEN_MODAL: {
            return { ...state, ...{ modal: action.data } };
        }
        case types.HIDE_MODAL: {
            return { ...state, ...{ modal: action.data } };
        }
        default: {
            return state;
        }   
    }
}
