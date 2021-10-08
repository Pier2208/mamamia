import { ADD_TO_CART, REMOVE_FROM_CART, EDIT_CART } from '../actions/types'

// const INITIAL_STATE = {
//     'Sweet Chili Chicken-M': {
//         price: 15,
//         quantity: 3
//     },
//     'Sweet Chili Chicken-S': {
//         price: 12,
//         quantity: 2
//     },
//     'Pepperoni-L': {
//         price: 12,
//         quantity: 1
//     }
// }

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const { key, quantity, ...rest } = payload
      if (state[key]) {
        const updateState = {
          ...state
        }
        updateState[key].quantity = parseInt(updateState[key].quantity) + parseInt(quantity)
        updateState[key].total = parseInt(updateState[key].quantity) * parseInt(updateState[key].price)
        return {
          ...state
        }
      } else {
        return {
          ...state,
          [key]: { key, quantity, ...rest }
        }
      }
    }

    case REMOVE_FROM_CART: {
      const { key } = payload
      const { [key]: _, ...newState } = state
      return {
        ...newState
      }
    }

    case EDIT_CART: {
      const { key, quantity } = payload
      const updateState = {
        ...state
      }
      updateState[key].quantity = quantity
      updateState[key].total = parseInt(quantity) * parseInt(updateState[key].price)
      return {
        ...updateState
      }
    }
    default:
      return state
  }
}
