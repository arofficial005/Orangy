// import {store} from '@redux/store';
import AuthStack from '@routes/stacks/authStack';
import axios, {AxiosInstance} from 'axios';
import { BASE_URL,store } from '../exporter';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const user = store.getState().root.user;
      if (user && user?.authToken && config.headers) {
        config.headers.Authorization = `Bearer ${user?.authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );
};

export {HTTP_CLIENT, initialConfig};
