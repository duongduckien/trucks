import { combineReducers } from 'redux';
import { commonReducer, ICommonState } from './common';
import { trucksReducer, ITrucksState } from './trucks';

export interface IState {
    common: ICommonState;
    trucks: ITrucksState;
}

export default combineReducers<IState>({
    common: commonReducer,
    trucks: trucksReducer,
});