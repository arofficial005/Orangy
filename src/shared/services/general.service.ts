import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

let HEADERS: any = {
    Accept: 'application/json',
  };

  export const Get_Venue_Rewards = (userId:any,type:any) => {
    return HTTP_CLIENT.get();
  };


  