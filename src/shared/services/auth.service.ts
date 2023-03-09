import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

let HEADERS: any = {
  Accept: 'application/json',
};

export const loginUser = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

