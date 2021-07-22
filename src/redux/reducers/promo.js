const initialState = {
  promoItems: [],
  activePromoIndex: 0,
};

function promo(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROMO':
      return {
        ...state,
        promoItems: action.payload,
      };
    case 'SET_ACTIVE_PROMO':
      return {
        ...state,
        activePromoIndex: action.payload,
      };
    default:
      return state;
  };
}

export default promo;
