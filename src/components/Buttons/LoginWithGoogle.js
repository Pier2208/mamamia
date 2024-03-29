import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from 'gatsby-link'

// COMPONENTS
import { useGoogleLogin } from 'react-google-login'
import { CustomButton } from './CustomButtons'
import Icon from '../Icon'

// REDUX ACTIONS
import { loginWithGoogle } from '../../redux/actions/userActions'
import { hideModal } from '../../redux/actions/modalActions'

const loginWithGoogleStyle = {
  fontSize: '1rem',
  padding: '0.5rem',
  width: '100%',
  bgColor: `var(--color-white)`,
  color: `var(--color-dark-grey)`,
  border: '1px solid var(--color-grey-dark)'
}

const LoginWithGoogleButton = ({ children, location }) => {
  const dispatch = useDispatch()

  const responseGoogle = response => {
    // if user closes the pop up before ending the auth process
    if (response.error) return
    dispatch(loginWithGoogle(response))
    dispatch(hideModal())
    // if the user looged in from /register, redirect him - else he might login via the modal, do not redirect him
    if (location === '/register') navigate('/')
  }

  const { signIn } = useGoogleLogin({
    clientId: '893396666303-uob3hut5voq6f0i8ifkobtab1rdkqkfq.apps.googleusercontent.com',
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin'
  })

  return (
    <CustomButton type="button" {...loginWithGoogleStyle} onClick={signIn}>
      <Icon
        name="google"
        width="1.4rem"
        height="1.4rem"
        style={{ marginRight: '0.5rem' }}
      />
      {children}
    </CustomButton>
  )
}

export default LoginWithGoogleButton
