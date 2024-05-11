import {pages} from '../constants/constants';
import {api, removeAuthToken, saveUserData, updateAuthToken} from './src';

export const signUp = async userData => {
  try {
    return await api.post('api/signup/', userData);
  } catch (error) {
    console.log('Error signing up:', error.response.data);
    throw error;
  }
};
export const login = async (mobile, password) => {
  try {
    const response = await api.post('api/login/', {
      mobile: mobile,
      password: password,
    });
    updateAuthToken(response.data.data.token);
    saveUserData(response.data.data);
    return response;
  } catch (error) {
    console.log('Error logging in:', error.response.data);
    throw error;
  }
};

export const handleAuthError = (error, navigation) => {
  if (error?.response?.status === 401) {
    removeAuthToken();
    navigation.navigate(pages.loginPage);
  }
  return error;
};
