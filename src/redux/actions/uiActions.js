import {
  HIDE_TOAST
} from './types'

export const hideToast = () => async dispatch => {
    dispatch({
        type: HIDE_TOAST
    })
}