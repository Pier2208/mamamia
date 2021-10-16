import { navigate } from 'gatsby'
import {
  REGISTER_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  SET_LOADING,
  SHOW_TOAST,
  SOCIAL_LOGIN,
  LOGIN_USER,
  RESET_CART
} from './types'

export const registerUser =
  ({ email, password }) =>
  async dispatch => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true
      })

      const reqOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }

      const response = await fetch('/.netlify/functions/createUser', reqOptions)
      const data = await response.json()

      //then dispatch to userReducer
      dispatch({
        type: REGISTER_USER,
        payload: data
      })
      dispatch({
        type: SET_LOADING,
        payload: false
      })
      dispatch({
        type: SHOW_TOAST,
        payload: {
          genre: 'success',
          message: 'You are now logged in.'
        }
      })
      navigate('/')
    } catch (err) {
      // throw  as is the error coming from fetch so that formLogic() can catch it as an object
      // throw Error('string') or throw new Error('string') expects a string
      console.log('err', err)
      throw err
    }
  }

export const getCurrentUser = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true
    })
    const reqOptions = {
      method: 'GET'
    }

    const response = await fetch(
      '/.netlify/functions/getCurrentUser',
      reqOptions
    )
    const data = await response.json()

    // dispatch action to set user
    dispatch({
      type: SET_CURRENT_USER,
      payload: data
    })
    dispatch({
      type: SET_LOADING,
      payload: false
    })
  } catch (err) {
    // fauna throws an error if getCurrentUser does not exist, thus we dispatch action manuallt to set set isAuth to false
    dispatch({
      type: SET_CURRENT_USER,
      payload: {
        user: { email: '' },
        isAuthenticated: false
      }
    })
    dispatch({
      type: SET_LOADING,
      payload: false
    })
  }
}

export const loginUser =
  ({ email, password }) =>
  async dispatch => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true
      })

      const reqOptions = {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })
      }
      const response = await fetch('/.netlify/functions/loginUser', reqOptions)
      const data = await response.json()

      dispatch({
        type: LOGIN_USER,
        payload: data
      })
      dispatch({
        type: SET_LOADING,
        payload: false
      })
      dispatch({
        type: SHOW_TOAST,
        payload: {
          genre: 'success',
          message: 'You are now logged in.'
        }
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  }

export const logoutUser = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true
    })

    const reqOptions = {
      method: 'GET'
    }

    const response = await fetch('/.netlify/functions/logoutUser', reqOptions)

    if (response.ok) {
      // dispatch action to reducer
      dispatch({
        type: LOGOUT_USER
      })
      dispatch({
        type: SHOW_TOAST,
        payload: {
          genre: 'success',
          message: 'You are now logged out.'
        }
      })
      dispatch({
        type: RESET_CART
      })
      dispatch({
        type: SET_LOADING,
        payload: false
      })
      navigate('/')
    }
  } catch (err) {
    console.log(err)
  }
}

export const loginWithGoogle = googleResponse => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true
    })

    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({
        id: googleResponse.googleId,
        email: googleResponse.profileObj.email
      })
    }
    const response = await fetch('/.netlify/functions/social-login', reqOptions)
    const data = await response.json()

    // dispatch action to reducer
    dispatch({
      type: SOCIAL_LOGIN,
      payload: data
    })
    dispatch({
      type: SET_LOADING,
      payload: false
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged in.'
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export const loginWithFacebook = facebookResponse => async dispatch => {
  try {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({
        id: facebookResponse.id,
        email: facebookResponse.email
      })
    }

    const response = await fetch('/.netlify/functions/social-login', reqOptions)
    const data = await response.json()

    // dispatch action to reducer
    dispatch({
      type: SOCIAL_LOGIN,
      payload: data
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged in.'
      }
    })
  } catch (err) {
    console.log(err)
  }
}
