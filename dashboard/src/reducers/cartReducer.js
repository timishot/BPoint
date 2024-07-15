import { Map, fromJS } from 'immutable';
import * as CartTypes from '../actions/cartActionTypes'

export const initialState = Map({
    cartItems: fromJS([]),
})

export function cartReducer(state = initialState, action = { type:null}) {
    switch(action.type) {
        case CartTypes.ADD_TO_CART:
            return state.update('cartItems', cartItems => 
                cartItems.push(fromJS({ ...action.payload, quantity: 1 }))
            )
        
        case CartTypes.REMOVE_FROM_CART:
            return state.update('cartItems', cartItems => 
                cartItems.filter(item => item.get('id') !== action.payload.bookId)
            )

        case CartTypes.UPDATE_CART_QUANTITY:
            return state.update('cartItems', cartItems => 
                cartItems.map(item => 
                    item.get('id') === action.payload.bookId
                    ? item.set('quantity', action.payload.quantity)
                    : item
                    )
            )

        default:
            return state
    }
}