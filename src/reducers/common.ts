import * as types from '../actions/types';

export interface ICommonState {
    showLoading: boolean;
}

export const COMMON_INITAL_STATE: ICommonState = {
    showLoading: false,
};

export function commonReducer(state = COMMON_INITAL_STATE, action: any): ICommonState {
    switch (action.type) {
        case types.SHOW_LOADING: {
            return { ...state, ...{ showLoading: action.data } };
        }
        default: {
            return state;
        }   
    }
}
