import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { loginWithFacebook } from '../../../redux/actions/userActions'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FaFacebook } from 'react-icons/fa'

const FacebookButton = styled.button`
  width: 70%;
  height: 50px;
  font-size: 1rem;
  border-radius: 5px;
  background: #3b5998;
  color: white;
  border: 0px transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  & svg {
    font-size: 1.2rem;
  }
`

const FacebookLoginButton = () => {
  const dispatch = useDispatch()

  const responseFacebook = response => {
    // if user closes hte popup before authenticating himself
    if (response.status === 'unknown') return
    dispatch(loginWithFacebook(response))
  }

  return (
    <FacebookLogin
      appId="294352414954862"
      autoLoad={false}
      fields="id,email"
      callback={responseFacebook}
      render={renderProps => (
        <FacebookButton onClick={renderProps.onClick}>
          <FaFacebook />
          Continue with Facebook
        </FacebookButton>
      )}
    />
  )
}

export default FacebookLoginButton

