import {combineReducers} from 'redux';

import products from './products';
import category from './category';
import cart from './cart';
import promo from './promo';
import filters from './filters';

const rootReducer = combineReducers({
  products,
  category,
  cart,
  promo,
  filters,
});

export default rootReducer;
