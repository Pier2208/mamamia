import { ADD_TO_CART, REMOVE_FROM_CART, EDIT_CART, SHOW_TOAST } from './types'

export const addToCart = pizza => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: pizza
  })
  dispatch({
    type: SHOW_TOAST,
    payload: {
      genre: 'success',
      message: `${pizza.name} x ${pizza.quantity} added to your cart!`
    }
  })
}

export const removeFromCart = cartItem => async dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { key: cartItem.key }
  })
  dispatch({
    type: SHOW_TOAST,
    payload: {
      genre: 'success',
      message: `${cartItem.name} x ${cartItem.quantity} removed from your cart!`
    }
  })
}

export const editCartQuantity = (key, quantity) => async dispatch => {
  dispatch({
    type: EDIT_CART,
    payload: {
      key,
      quantity
    }
  })
  dispatch({
    type: SHOW_TOAST,
    payload: {
      genre: 'success',
      message: `Your cart has been updated!`
    }
  })
}
