import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import { cartReducer } from './cartReducer';
// import other reducers if any

const rootReducer = combineReducers({
  bookReducer,
  cartReducer,
  // other reducers
});

export default rootReducer;