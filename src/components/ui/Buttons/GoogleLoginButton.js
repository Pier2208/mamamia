import React from 'react'
import { useDispatch } from 'react-redux'
import { loginWithGoogle } from '../../../redux/actions/userActions'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'

const GoogleButton = styled.button`
  width: 70%;
  margin-top: 15px;
  height: 50px;
  border-radius: 5px;
  color: black;
  background-color: ${props => props.theme.colors.offWhite};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border: 0px transparent;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;

  & svg {
    font-size: 1.2rem;
  }
`

const GoogleLoginButton = () => {
  const dispatch = useDispatch()

  const responseGoogle = response => {
    // if user closes the pop up before ending the auth process
    if (response.error) return
    dispatch(loginWithGoogle(response))
  }

  return (
    <GoogleLogin
      clientId="734224202894-783a4d8pk7s6oat4gko4ddhf7fpvapgq.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <GoogleButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <FcGoogle />
          Continue with Google
        </GoogleButton>
      )}
    />
  )
}

export default GoogleLoginButton
