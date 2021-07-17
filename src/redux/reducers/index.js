import {combineReducers} from 'redux';

import products from './products';
import category from './category';

const rootReducer = combineReducers({
  products,
  category,
});

export default rootReducer;
