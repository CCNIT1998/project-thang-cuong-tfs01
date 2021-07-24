import axios from '../utils/axios';

const getProducts = async ({
  page,
  limit,
  sort,
  order,
  search,
  categoryId,
}) => {
  try {
    const respon = await axios.get(
      `/products?page=${page}&limit=${limit}&sort=${sort}&order=${order}&search=${search}&category=${categoryId}`
    );
    return respon.data;
  } catch (e) {
    return;
  }
};

const getProductById = async (handle) => {
  try {
    const respon = await axios.get(`/products/${handle}`);
    return respon.data;
  } catch (e) {
    return;
  }
};
const getProductByCollection = async ({
  page,
  limit,
  sort,
  order,
  search,
  collection_id,
}) => {
  console.log(collection_id);
  try {
    const respon = await axios.get(
      `/products/collections/${collection_id}?page=${page}&limit=${limit}&sort=${sort}&order=${order}&search=${search}`
    );
    
    return respon.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export { getProducts, getProductById, getProductByCollection };