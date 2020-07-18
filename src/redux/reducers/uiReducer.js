import { SET_LOADING, SHOW_TOAST, HIDE_TOAST } from '../actions/types'

const INITIAL_STATE = {
  loading: false,
  toast: {
    genre: '',
    isActive: false,
    message: '',
  },
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      }
    case SHOW_TOAST:
      return {
        ...state,
        toast: {
          isActive: true,
          genre: payload.genre,
          message: payload.message,
        },
      }
    case HIDE_TOAST:
      return {
        ...state,
        toast: {
          isActive: false,
          style: '',
          message: '',
        },
      }
    default:
      return state
  }
}
