import axios from 'axios';

export const fetchPromo = (dispatch) => {
  axios.get(`/promo/`)
      .then((data) => data.data)
      .then((promoItems) => dispatch(setPromo(promoItems)));
};

export const setPromo = (promoItems) => ({
  type: 'SET_PROMO',
  payload: promoItems,
});

export const setActivePromo = (index) => ({
  type: 'SET_ACTIVE_PROMO',
  payload: index,
});
