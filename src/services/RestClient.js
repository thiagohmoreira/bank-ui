import axios from 'axios';

const _axios = axios.create();

export const configureAuthHeaders = (token) => {
    _axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};

export const useAxiosClient = () => _axios;