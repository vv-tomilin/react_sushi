import {combineReducers} from 'redux';

import products from './products';
import category from './category';
import cart from './cart';

const rootReducer = combineReducers({
  products,
  category,
  cart,
});

export default rootReducer;
