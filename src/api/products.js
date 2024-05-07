import {createData, fetchData} from './utils';

const productBase = `api/product/`;

export const fetchProduct = async (productId = null) => {
  try {
    return await fetchData(productBase + (productId || ''));
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
