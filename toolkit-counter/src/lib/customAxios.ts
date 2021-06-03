import axios, { AxiosInstance } from 'axios';
import { TIMEOUT_SECONDS } from 'constants/time';

const customAxios: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  timeout: TIMEOUT_SECONDS,
});

export default customAxios;