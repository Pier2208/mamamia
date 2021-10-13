import React from 'react'
import { useDispatch } from 'react-redux'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

// COMPONENTS
import { CustomButton } from './CustomButtons'
import Icon from '../Icon'

// REDUX ACTIONS
import { loginWithFacebook } from '../../redux/actions/userActions'
import { hideModal } from '../../redux/actions/modalActions'
import { navigate } from 'gatsby-link'

const inputStyle = {
  fontSize: '1rem',
  padding: '0.5rem'
}

const loginWithFacebookStyle = {
  ...inputStyle,
  width: '100%',
  bgColor: '#4267B2',
  color: 'var(--color-white)'
}

const LoginWithFacebookButton = ({ children, location }) => {
  const dispatch = useDispatch()

  const responseFacebook = response => {
    // if user closes the popup before authenticating himself
    if (response.status === 'unknown') return
    dispatch(loginWithFacebook(response))
    dispatch(hideModal())
    // if the user looged in from /register, redirect him - else he might login via the modal, do not redirect him
    if (location === '/register') navigate('/')
  }

  return (
    <FacebookLogin
      appId="294352414954862"
      autoLoad={false}
      fields="id,email"
      callback={responseFacebook}
      render={renderProps => (
        <CustomButton
          type="button"
          {...loginWithFacebookStyle}
          onClick={renderProps.onClick}
        >
          <Icon
            name="facebook"
            width="1.4rem"
            height="1.4rem"
            style={{ marginRight: '0.5rem' }}
          />
          {children}
        </CustomButton>
      )}
    />
  )
}

export default LoginWithFacebookButton
