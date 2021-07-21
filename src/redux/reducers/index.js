import {combineReducers} from 'redux';

import products from './products';
import category from './category';
import cart from './cart';
import promo from './promo';

const rootReducer = combineReducers({
  products,
  category,
  cart,
  promo,
});

export default rootReducer;
