import {api} from './src';

export const fetchData = async endpoint => {
  try {
    const response = await api.get(endpoint);
    console.log('fetched data from', endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createData = async (endpoint, requestData) => {
  try {
    const response = await api.post(endpoint, requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};
