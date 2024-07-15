import { FETCH_BOOKS_SUCCESS } from '../actions/bookActionTypes';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  books: [],
});

export function bookReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return state.set('books', fromJS(action.payload));
    default:
      return state;
  }
}
