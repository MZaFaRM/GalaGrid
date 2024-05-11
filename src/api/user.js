import {fetchData, updateData} from './utils';

const userBase = 'api/profile/';

export const editUser = async data => {
  try {
    return await updateData(userBase, data);
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    return await fetchData(userBase);
  } catch (error) {
    console.log('Error fetching user:', error);
    throw error;
  }
};
