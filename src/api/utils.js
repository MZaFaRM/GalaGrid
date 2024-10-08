import {api, updateAuthToken} from './src';

export const fetchData = async endpoint => {
  try {
    await updateAuthToken();
    const response = await api.get(endpoint);
    console.log('fetched data from', endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response?.data);
    throw error;
  }
};

export const createData = async (endpoint, requestData) => {
  try {
    await updateAuthToken();
    const response = await api.post(endpoint, requestData);
    return response.data;
  } catch (error) {
    console.log(
      'Error creating data:',
      JSON.stringify(error.response.data.errors),
    );
    throw error;
  }
};

export const updateData = async (endpoint, requestData) => {
  try {
    await updateAuthToken();
    const response = await api.patch(endpoint, requestData);
    return response.data;
  } catch (error) {
    console.log(
      'Error updating data:',
      JSON.stringify(error.response.data?.errors),
    );
    throw error;
  }
};

export const deleteData = async endpoint => {
  try {
    await updateAuthToken();
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
