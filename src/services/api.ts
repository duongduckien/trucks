import { Middleware } from '../utilities/middleware';

const httpRequest = new Middleware();

export class API {

    getTruckTypes() {
        return httpRequest.axiosInstance.get('/users');
    }

}