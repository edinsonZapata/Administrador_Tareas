import {environment as devEnvironment} from "./environments/environment";

let environment: any;
switch (process.env.VUE_APP_ENVIRONMENT) {
    default:
        environment = devEnvironment;
        break;
}

export const BASE_URL_MANAGER = environment.vueAppAPI;
export const SECRET = environment.secret;