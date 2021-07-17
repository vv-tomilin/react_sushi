import axios from 'axios';

export const fetchProducts = (dispatch) => {
  axios.get(
      `http://localhost:3001/products?`)
      .then((data) => data.data)
      .then((items) => dispatch(setProducts(items)));
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
