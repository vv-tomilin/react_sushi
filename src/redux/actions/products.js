import axios from 'axios';

export const fetchProducts = (category) => (dispatch) => {
  axios.get(
      `http://localhost:3001/products?category=${category}`)
      .then((data) => data.data)
      .then((items) => dispatch(setProducts(items)));
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
