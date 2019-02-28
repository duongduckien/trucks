import * as types from '../actions/types';

export interface ICommonState {
    showLoading: boolean;
    modal: {
        show: boolean,
        data: {
            component: string,
            title: string,
        },
    };
}

export const COMMON_INITAL_STATE: ICommonState = {
    showLoading: false,
    modal: {
        show: false,
        data: {
            component: '',
            title: '',
        },
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
