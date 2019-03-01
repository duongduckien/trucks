import { combineReducers } from 'redux';
import { commonReducer, ICommonState } from './common.reducer';
import { trucksReducer, ITrucksState } from './truck.reducer';
import { driversReducer, IDriversState } from './driver.reducer';

export interface IState {
    common: ICommonState;
    trucks: ITrucksState;
    drivers: IDriversState;
}

export default combineReducers<IState>({
    common: commonReducer,
    trucks: trucksReducer,
    drivers: driversReducer,
});