import {pages} from '../constants/constants';
import {api, removeAuthToken, updateAuthToken} from './src';

export const signUp = async userData => {
  try {
    return await api.post('api/signup/', userData);
  } catch (error) {
    console.error('Error signing up:', error.response.data);
    throw error;
  }
};
export const login = async (mobile, password) => {
  try {
    const authToken = await api.post('api/login/', {
      mobile: mobile,
      password: password,
    });
    updateAuthToken(authToken.data.token);
    return authToken;
  } catch (error) {
    console.error('Error signing up:', error.response.data);
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
