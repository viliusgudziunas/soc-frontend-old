import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { UserLoginModel, UserRegisterModel } from '../models/userModel';
import { endpoints } from '../shared/endpoints';
import { AddWorkoutModel, UserDto } from '../shared/types';

export interface ResponseWithDataDto {
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

export interface LogoutResponseDto {
  status: 'success' | 'fail';
  message: string;
}

export const ApiService = {
  addUser: (
    data: UserRegisterModel
  ): Promise<AxiosRequestConfig | undefined> => {
    const endpoint = endpoints.users.create;
    const body = data;

    return axios.post(endpoint, body);
  },

  login: (
    data: UserLoginModel
  ): Promise<AxiosResponse<ResponseWithDataDto>> => {
    const endpoint = endpoints.auth.login;
    const body = data;

    return axios.post<ResponseWithDataDto>(endpoint, body);
  },

  logout: (authToken: string): Promise<AxiosResponse<LogoutResponseDto>> => {
    const endpoint = endpoints.auth.logout;
    const body = {};
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${authToken}` },
    };

    return axios.post<LogoutResponseDto>(endpoint, body, config);
  },

  addWorkout: (
    data: AddWorkoutModel,
    authToken: string
  ): Promise<AxiosResponse<ResponseWithDataDto>> => {
    const endpoint = endpoints.workouts.create;
    const body = data;
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${authToken}` },
    };

    return axios.post<ResponseWithDataDto>(endpoint, body, config);
  },
};
