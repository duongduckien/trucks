import { put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as trucksActions from '../actions/trucks.action';

// Utilities
import { Helper } from '../utilities/helper';

// Services
import { API } from '../services/api';

const api = new API();
const helper = new Helper();

export function* getTruckTypes() {

    try {

        const result = yield call(api.getCargoTypes);
        yield put(trucksActions.getCargoTypeSuccess({
            items: result.data,
        }));

    } catch (e) {
        console.log(e);
    }

}

export function* watchGetTruckTypesRequest() {
    yield takeEvery(types.GET_CARGO_TYPES, getTruckTypes);
}

export function* getTruckStatus() {

    try {

        const result = yield call(api.getTruckStatus);
        yield put(trucksActions.getTruckStatusSuccess({
            items: result.data,
        }));

    } catch (e) {
        console.log(e);
    }

}

export function* watchGetTruckStatusRequest() {
    yield takeEvery(types.GET_TRUCK_STATUS, getTruckStatus);
}

export function* createTruck(action: any) {

    try {

        const result = yield call(api.createTruck, action['payload']);
        yield call(getTrucks);

    } catch (e) {
        console.log(e);
    }

}

export function* watchCreateTruck() {
    yield takeLatest(types.CREATE_TRUCK, createTruck);
}

export function* getTrucks() {

    try {

        const trucksResult = yield call(api.getTrucks);
        const cargoTypeResult = yield call(api.getCargoTypes);
        const driversResult = yield call(api.getDrivers);
        const trucksStatus = yield call(api.getTruckStatus);

        if (trucksResult.data.length > 0) {
            for (const truck of trucksResult.data) {

                if (truck['cargoType']) {

                    if (Array.isArray(truck['cargoType']) && truck['cargoType'].length > 0) {

                        let cargoTypeStr = '';
                        let cnt = 0;
                        for (const typeId of truck['cargoType']) {
                            cnt++;
                            for (const type of cargoTypeResult.data) {
                                if (type['id'] === typeId) {
                                    if (cnt === 1) {
                                        cargoTypeStr += (truck['cargoType'].length === 1) ? `${type['name']}` : `${type['name']},`;
                                    } else if (cnt === truck['cargoType'].length) {
                                        cargoTypeStr += ` ${type['name']}`;
                                    } else {
                                        cargoTypeStr += ` ${type['name']},`;
                                    }
                                    break;
                                }
                            }
                        }

                        truck['cargoTypeShow'] = cargoTypeStr;

                    } else {
                        truck['cargoTypeShow'] = '';
                    }

                } 
                
                if (truck['driver']) {
                    if (driversResult.data.length > 0) {
                        for (const driver of driversResult.data) {
                            if (driver['id'] === truck['driver']) {
                                truck['driverShow'] = driver['name'];
                                break;
                            }
                        }
                    }
                }

                if (truck['status']) {
                    if (trucksStatus.data.length > 0) {
                        for (const status of trucksStatus.data) {
                            if (status['id'] === truck['status']) {
                                truck['statusShow'] = status['name'];
                                break;
                            }
                        }
                    }
                }

                if (truck['dimension']) {
                    truck['dimensionShow'] = `${truck['dimension']['l']} - ${truck['dimension']['w']} - ${truck['dimension']['h']}`;
                }

                if (truck['price']) {
                    const price = truck['price'];
                    truck['priceShow'] = helper.addSymbol(price.toString(), ',');
                }

            }
        }

        yield put(trucksActions.getTrucksSuccess({
            items: trucksResult.data,
        }));

    } catch (e) {
        console.log(e);
    }

}

export function* watchGetTrucks() {
    yield takeEvery(types.GET_TRUCKS, getTrucks);
}

const trucksSaga = [
    fork(watchGetTruckTypesRequest),
    fork(watchGetTruckStatusRequest),
    fork(watchCreateTruck),
    fork(watchGetTrucks),
];

export default trucksSaga;
