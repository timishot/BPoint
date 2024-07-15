import * as CartsType from './cartActionTypes'

export const addToCart = (book) => ({
    type: CartsType.ADD_TO_CART,
    payload: book,
})

export const removeFromCarrt = (bookId) => ({
    type: CartsType.REMOVE_FROM_CART,
    payload: bookId,
})

export const updateCartQuantity = (bookId, quantity) => ({
    type: CartsType.UPDATE_CART_QUANTITY,
    payload:{ bookId, quantity }
})