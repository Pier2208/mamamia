import { navigate } from 'gatsby'
import { ADD_TO_CART, REMOVE_FROM_CART, EDIT_CART, SHOW_TOAST } from './types'

export const addToCart = (pizza) => async dispatch => {
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
