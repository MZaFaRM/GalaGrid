import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  //   baseURL: 'https://webscrapper-r78p.onrender.com',
  baseURL: 'https://1117-2405-201-f021-1039-d58-c1c8-9250-58fa.ngrok-free.app',
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

export const removeAuthToken = async () => {
  await AsyncStorage.removeItem('authToken');
  delete api.defaults.headers.common.Authorization;
};

export const updateAuthToken = async (token = null) => {
  if (!token) {
    token = await getAuthToken();
  }
  await saveAuthToken(token);
  api.defaults.headers.common.Authorization = `Token ${token}`;
};

export const saveUserData = async userData => {
  await AsyncStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = async () => {
  return JSON.parse(await AsyncStorage.getItem('userData'));
};

export const removeUserData = async () => {
  await AsyncStorage.removeItem('userData');
};
