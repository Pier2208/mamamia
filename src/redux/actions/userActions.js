import axios from 'axios'
import { navigate } from 'gatsby'
import {
  REGISTER_USER,
  LOGOUT_USER,
  SOCIAL_LOGIN,
  SET_CURRENT_USER,
  LOGIN_USER,
  SET_LOADING,
  SHOW_TOAST,
} from './types'

export const registerUser = ({ email, password }) => async dispatch => {
  // console.log('should run once')
  try {
    const response = await axios({
      method: 'post',
      url: '/api/createUser',
      data: {
        email,
        password,
      },
    })
    //then dispatch to userReducer
    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged in.',
      },
    })
    navigate('/')
  } catch (err) {
    // throw  as is the error coming from axios so that formLogic() can catch it as an object
    // throw Error('string') or throw new Error('string') expects a string
    throw err.response.data.error
  }
}

export const logoutUser = () => async dispatch => {
  console.log('should run once')
  try {
    await axios({
      method: 'get',
      url: '/api/logoutUser',
    })
    // dispatch action to reducer
    dispatch({
      type: LOGOUT_USER,
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged out.',
      },
    })
    navigate('/')
  } catch (err) {
    console.log(err.response.data)
  }
}

export const loginWithGoogle = googleResponse => async dispatch => {
  //console.log('should run once')
  try {
    const response = await axios({
      method: 'post',
      url: '/api/social-login',
      data: {
        id: googleResponse.googleId,
        email: googleResponse.profileObj.email,
      },
    })
    // dispatch action to reducer
    dispatch({
      type: SOCIAL_LOGIN,
      payload: response.data,
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged in.',
      },
    })
    navigate('/')
  } catch (err) {
    console.log(err)
  }
}

export const loginWithFacebook = facebookResponse => async dispatch => {
  //console.log('should run once')
  try {
    const response = await axios({
      method: 'post',
      url: '/api/social-login',
      data: {
        id: facebookResponse.id,
        email: facebookResponse.email,
      },
    })
    console.log(response.data)
    // dispatch action to reducer
    dispatch({
      type: SOCIAL_LOGIN,
      payload: response.data,
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged in.',
      },
    })
    navigate('/')
  } catch (err) {
    console.log(err)
  }
}

export const loginUser = ({ email, password }) => async dispatch => {
  try {
    console.log('should run once')
    const response = await axios({
      method: 'post',
      url: '/api/loginUser',
      data: {
        email,
        password,
      },
    })
    //then dispatch to userReducer
    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    })
    dispatch({
      type: SHOW_TOAST,
      payload: {
        genre: 'success',
        message: 'You are now logged in.',
      },
    })
    navigate('/')
  } catch (err) {
    console.log(err.response.data)
    throw err.response.data.error
  }
}

export const getCurrentUser = () => async dispatch => {
  try {
    console.log('should run once')
    dispatch({
      type: SET_LOADING,
      payload: true,
    })
    const response = await axios({
      method: 'get',
      url: '/api/getCurrentUser',
    })
    // dispatch action to set user
    dispatch({
      type: SET_CURRENT_USER,
      payload: response.data,
    })
    dispatch({
      type: SET_LOADING,
      payload: false,
    })
  } catch (err) {
    dispatch({
      type: SET_LOADING,
      payload: false,
    })
  }
}

export const forgotPassword = ({ email }) => async dispatch => {
  try {
    console.log('should run once')
    const response = await axios({
      method: 'post',
      url: '/api/forgotPassword',
      data: {
        email,
      },
    })
    //then dispatch to userReducer
    // dispatch({
    //   type: TOAST_SUCCESS,
    //   payload: response.data,
    // })
  } catch (err) {
    console.log(err.response.data)
    throw err.response.data.error
  }
}

export const validateToken = token => async dispatch => {
  try {
    console.log('should run once')
    const response = await axios({
      method: 'get',
      url: `/api/reset-password`,
      params: {
        token,
      },
    })
    //then dispatch to userReducer
    // dispatch({
    //   type: TOAST_SUCCESS,
    //   payload: response.data,
    // })
  } catch (err) {
    console.log(err.response.data)
  }
}
