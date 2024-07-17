import * as CartsType from './cartActionTypes'

export const addToCart = (book) => ({
    type: CartsType.ADD_TO_CART,
    payload: book,
})

export const removeFromCart = (book) => ({
    type: CartsType.REMOVE_FROM_CART,
    payload: book,
})

export const updateCartQuantity = (book, quantity) => ({
    type: CartsType.UPDATE_CART_QUANTITY,
    payload:{ book, quantity }
})