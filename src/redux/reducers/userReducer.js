import {
    REGISTER_USER,
    SET_CURRENT_USER,
    LOGOUT_USER,
    SOCIAL_LOGIN,
    LOGIN_USER,
  } from '../actions/types'
  
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
          isAuthenticated: payload.isAuthenticated,
        }
      case LOGIN_USER:
        return {
          ...state,
          email: payload.user.email,
          isAuthenticated: payload.isAuthenticated,
        }
      case SOCIAL_LOGIN:
        return {
          ...state,
          email: payload.user.email,
          isAuthenticated: payload.isAuthenticated,
        }
      case SET_CURRENT_USER:
        return {
          ...state,
          email: payload.user.email,
          isAuthenticated: payload.isAuthenticated,
        }
      case LOGOUT_USER:
        return INITIAL_STATE
      default:
        return state
    }
  }
  