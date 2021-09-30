import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { CustomButton } from './CustomButtons'
import { loginWithGoogle } from '../../redux/actions/userActions'
import Icon from '../Icon'

const loginWithGoogleStyle = {
  fontSize: '1rem',
  padding: '0.5rem',
  width: '100%',
  bgColor: `var(--color-white)`,
  color: `var(--color-dark-grey)`,
  border: '1px solid var(--color-grey-dark)'
}

const LoginWithGoogleButton = () => {
  const responseGoogle = response => {
    // if user closes the pop up before ending the auth process
    if (response.error) return
    dispatch(loginWithGoogle(response))
  }

  const dispatch = useDispatch()
  const { signIn } = useGoogleLogin({
    clientId:
      '893396666303-uob3hut5voq6f0i8ifkobtab1rdkqkfq.apps.googleusercontent.com',
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin'
  })

  return (
    <CustomButton {...loginWithGoogleStyle} onClick={signIn}>
      <Icon
        name="google"
        width="1.4rem"
        height="1.4rem"
        style={{ marginRight: '0.5rem' }}
      />
      Register with Google
    </CustomButton>
  )
}

export default LoginWithGoogleButton
