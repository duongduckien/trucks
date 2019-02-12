import { combineReducers } from 'redux';
import { commonReducer, ICommonState } from './common';

export interface IState {
    common: ICommonState;
}

export default combineReducers<IState>({
    common: commonReducer,
});