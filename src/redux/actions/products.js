import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));

  axios.get(
      `/products?category=${category}&_sort=${sortBy.type}&_order=${
        sortBy.order
      },`)
      .then((data) => data.data)
      .then((items) => dispatch(setProducts(items)));
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
