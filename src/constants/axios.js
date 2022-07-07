import axios from 'axios';
import { Platform } from 'react-native';
export let axiosInstance = null;
export const getPrefixBaseUrl = () => (Platform.OS === 'android' ? `http://${"jessy".privateIp}:3000/api` : 'http://localhost:3000/api');
export const createAxiosInstance = () => {
  const accessToken = "jessy".user.accessToken;
  axiosInstance = axios.create({
    baseURL: getPrefixBaseUrl(),
    timeout: 10000,
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return axiosInstance;
};
export const baseAuthUrl = '/auth';
export const baseUrl = '/data';
