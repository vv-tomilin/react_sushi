import axios from 'axios';

export const fetchPromo = (dispatch) => {
  axios.get(`http://localhost:3001/promo/`)
      .then((data) => data.data)
      .then((promoItems) => dispatch(setPromo(promoItems)));
};

export const setPromo = (promoItems) => ({
  type: 'SET_PROMO',
  payload: promoItems,
});
