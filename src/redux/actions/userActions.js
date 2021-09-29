import { navigate } from 'gatsby'
import { REGISTER_USER } from './types'

export const registerUser =
  ({ email, password }) =>
  async dispatch => {
    // console.log('should run once')
    try {
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

      console.log(data)

      //then dispatch to userReducer
      // dispatch({
      //   type: REGISTER_USER,
      //   payload: data
      // })
      //   dispatch({
      //     type: SHOW_TOAST,
      //     payload: {
      //       genre: 'success',
      //       message: 'You are now logged in.'
      //     }
      //   })
      navigate('/')
    } catch (err) {
      // throw  as is the error coming from fetch so that formLogic() can catch it as an object
      // throw Error('string') or throw new Error('string') expects a string
      console.log('err', err)
      throw err
    }
  }
