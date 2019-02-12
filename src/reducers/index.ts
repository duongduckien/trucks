import { combineReducers } from 'redux';
import { commonReducer, CommonState } from './common';

export interface State {
    common: CommonState;
};

export default combineReducers<State>({
    common: commonReducer
});