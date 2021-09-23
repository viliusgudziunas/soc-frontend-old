import axios, { AxiosRequestConfig } from 'axios';
import { UserAuthModel } from 'models';
import { endpoints } from '../shared/endpoints';

export const ApiService = {
  addUser: (data: UserAuthModel): Promise<AxiosRequestConfig | undefined> => {
    const endpoint = endpoints.users.create;
    const body = data;

    return axios.post(endpoint, body);
  },
};
