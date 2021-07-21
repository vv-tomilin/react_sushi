const initialState = {
  promoItems: [],
};

function promo(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROMO':
      return {
        ...state,
        promoItems: action.payload,
      };
    default:
      return state;
  };
}

export default promo;
