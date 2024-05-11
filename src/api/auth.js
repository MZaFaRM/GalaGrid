import AsyncStorage from '@react-native-async-storage/async-storage';
import {pages} from '../constants/constants';
import {api, removeAuthToken, saveUserData, updateAuthToken} from './src';

export const signUp = async userData => {
  try {
    return await api.post('api/signup/', userData);
  } catch (error) {
    console.log('Error signing up:', error.response?.data);
    throw error;
  }
};
export const login = async (mobile, password) => {
  try {
    const response = await api.post('api/login/', {
      mobile: mobile,
      password: password,
    });
    console.log(response.data.data.token);
    updateAuthToken(response.data.data.token);
    saveUserData(response.data.data);
    return response;
  } catch (error) {
    console.log('Error logging in:', error.response?.data);
    throw error;
  }
};

export const handleAuthError = async (error, navigation) => {
  if (
    error?.response?.status === 401 ||
    !(await AsyncStorage.getItem('authToken'))
  ) {
    removeAuthToken();
    navigation.navigate(pages.loginPage);
  }
  return error;
};
