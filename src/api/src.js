import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  //   baseURL: 'https://webscrapper-r78p.onrender.com',
  baseURL: 'https://1c50-2405-201-f021-1039-18df-8ade-941d-2bc5.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAuthToken = async () => {
  return AsyncStorage.getItem('authToken');
};

export const saveAuthToken = async token => {
  await AsyncStorage.setItem('authToken', token);
};

export const updateAuthToken = async (token = null) => {
  if (!token) {
    token = await getAuthToken(); // Await the result of getAuthToken()
  }
  await saveAuthToken(token);
  api.defaults.headers.common.Authorization = `Token ${token}`;
};

export const removeAuthToken = async () => {
  await AsyncStorage.removeItem('authToken');
  delete api.defaults.headers.common.Authorization;
};
