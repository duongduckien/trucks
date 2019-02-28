import { Middleware } from '../utilities/middleware';

const httpRequest = new Middleware();

export class API {

    getCargoTypes() {
        return httpRequest.axiosInstance.get('/cargoTypes');
    }

    getDrivers() {
        return httpRequest.axiosInstance.get('/drivers');
    }

    getTruckStatus() {
        return httpRequest.axiosInstance.get('/truckStatus');
    }

}