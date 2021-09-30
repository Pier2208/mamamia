import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Input } from '../Forms/FormUI'
import { CustomButton } from '../Buttons/CustomButtons'
import Icon from '../Icon'
import Divider from '../Divider'

// bubble diallog: http://nicolasgallagher.com/pure-css-speech-bubbles/demo/
const Modal = styled.div`
  position: absolute;
  bottom: -345px;
  right: var(--spacing-m);
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 15px rgba(79, 81, 80, 0.1);
  width: 300px;
  z-index: 11;

  &:after {
    content: '';
    position: absolute;
    top: -15px; /* value = - border-top-width - border-bottom-width */
    right: 50px; /* controls horizontal position */
    border-width: 0 15px 15px; /* vary these values to change the angle of the vertex */
    bottom: auto;
    left: auto;
    border-style: solid;
    border-color: var(--color-white) transparent;
    /* reduce the damage in FF3.0 */
    display: block;
    width: 0;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: var(--spacing-s);
  }
`
const inputStyle = {
  padding: '0.5rem'
}

const buttonStyle = {
  bgColor: `var(--color-primary)`,
  padding: '0.5rem',
  fontSize: '0.7rem',
  width: '100%'
}

const loginWithGoogleStyle = {
  ...buttonStyle,
  bgColor: `var(--color-white)`,
  color: `var(--color-dark-grey)`,
  border: '1px solid var(--color-grey-dark)'
}

const registerButtonStyle = {
  ...buttonStyle,
  bgColor: `var(--color-grey-dark)`
}

const ForgotPassword = styled.small`
  text-align: center;
  margin: 0.5rem 0;
  text-decoration: underline;
`

const QuickLoginModal = ({ show }) => {
  if (show)
    return (
      <Modal>
        <Form>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            {...inputStyle}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            {...inputStyle}
          />
          <CustomButton {...buttonStyle}>Login</CustomButton>
        </Form>
        <ForgotPassword>
          <Link to="">I forgot my password</Link>
        </ForgotPassword>
        <Divider />
        <CustomButton {...loginWithGoogleStyle}>
          <Icon
            name="google"
            width="0.9rem"
            height="0.9rem"
            style={{ marginRight: '0.5rem' }}
          />
          Login with Google
        </CustomButton>
        <Link to="/register">
          <CustomButton {...registerButtonStyle}>Create an account</CustomButton>
        </Link>
      </Modal>
    )
  else return null
}

export default QuickLoginModal
