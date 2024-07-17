import { Map, fromJS } from 'immutable';
import * as CartTypes from '../actions/cartActionTypes';

export const initialState = Map({
    cartItems: fromJS([]),
});

export function cartReducer(state = initialState, action = { type: null }) {
    switch(action.type) {
        case CartTypes.ADD_TO_CART:
            const bookToAdd = fromJS({ ...action.payload, quantity: 1 });
            const bookRankToAdd = action.payload.bookRank;
            const updatedState = state.update('cartItems', cartItems => {
                const existingBookIndex = cartItems.findIndex(item => item.get('bookRank') === bookRankToAdd);
                if (existingBookIndex !== -1){
                    return cartItems.update(existingBookIndex, item => 
                        item.set('quantity', item.get('quantity') + 1)
                    );
                } else {
                    return cartItems.push(bookToAdd);
                }
            });
            console.log('Updated cartItems:', updatedState.get('cartItems').toJS());
            return updatedState;


        case CartTypes.REMOVE_FROM_CART:
            return state.update('cartItems', cartItems =>
                cartItems.filter(item => item.get('bookRank') !== action.payload.bookRank)
            );

        case CartTypes.UPDATE_CART_QUANTITY:
            const { book, quantity } = action.payload;
            const updateCart = state.update('cartItems', cartItems =>
            cartItems.map(item =>
                item.get('bookRank') === book.bookRank
                ? item.set('quantity', quantity)
                : item
            )
            );
            return updateCart

        default:
            return state;
    }
}
