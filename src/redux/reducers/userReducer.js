import { REGISTER_USER } from '../actions/types'

const INITIAL_STATE = {
  isAuthenticated: false,
  email: ''
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        email: payload.user.email,
        isAuthenticated: payload.isAuthenticated
      }
    default:
      return state
  }
}
