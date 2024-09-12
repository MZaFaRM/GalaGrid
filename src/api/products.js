import {updateAuthToken} from './src';
import {createData, deleteData, fetchData} from './utils';

const productBase = `api/product/`;

export const fetchProduct = async (productId = null) => {
  try {
    console.log(productBase + (productId || ''));
    return await fetchData(productBase + (productId || '') + '/');
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const createProduct = async productData => {
  try {
    return await createData(productBase, productData);
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const saveToEvents = async eventData => {
  try {
    return await createData(`${productBase}save-to-events/`, eventData);
  } catch (error) {
    console.error('Error saving to events:', error);
    throw error;
  }
};

export const createReview = async (product, rating, comment) => {
  try {
    return await createData(`${productBase}review/`, {
      product,
      rating,
      comment,
    });
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

export const deleteReview = async () => {
  try {
    return await deleteData(`${productBase}review/`);
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};
