import { ADD_TO_CART } from '../actions/types'

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

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, { type, payload }) => {

  switch (type) {
    case ADD_TO_CART:
      const { key, ...rest } = payload
      return {
        ...state,
        [key]: { ...rest }
      }
    default:
      return state
  }
}
