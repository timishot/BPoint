// import { FETCH_BOOKS_SUCCESS } from '../actions/bookActionTypes';
// import { fromJS } from 'immutable';

// export const initialState = fromJS({
//   books: [],
// });

// export function bookReducer(state = initialState, action = { type: null }) {
//   switch (action.type) {
//     case FETCH_BOOKS_SUCCESS:
//       return state.set('books', fromJS(action.payload));
//     default:
//       return state;
//   }
// }

import { FETCH_BOOKS_SUCCESS } from '../actions/bookActionTypes';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  books: [],
});

export function bookReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      // Convert the Immutable.js object to a plain JavaScript object
      const books = action.payload.toJS ? action.payload.toJS() : action.payload;
      return state.set('books', fromJS(books));
    default:
      return state;
  }
}