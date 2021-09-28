import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { UserDto, UserLoginModel, UserRegisterModel } from 'models';
import { endpoints } from '../shared/endpoints';

export interface LoginResponseDto {
  status: 'success' | 'fail';
  data: {
    // * Success
    authToken?: string;
    user?: UserDto;

    // * Fail
    fields?: string[];
    reason?: string;
  };
}

export const ApiService = {
  addUser: (
    data: UserRegisterModel
  ): Promise<AxiosRequestConfig | undefined> => {
    const endpoint = endpoints.users.create;
    const body = data;

    return axios.post(endpoint, body);
  },

  login: (data: UserLoginModel): Promise<AxiosResponse<LoginResponseDto>> => {
    const endpoint = endpoints.auth.login;
    const body = data;

    return axios.post<LoginResponseDto>(endpoint, body);
  },
};
