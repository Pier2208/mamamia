import React from 'react'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

// COMPONENTS
import useForm from '../../../hooks/useForm'
import { Input } from '../FormUI'
import { CustomButton } from '../../Buttons/CustomButtons'
import LoginWithGoogleButton from '../../Buttons/LoginWithGoogle'
import LoginWithFacebookButton from '../../Buttons/LoginWithFacebook'
import loginFormValidate from './loginFormValidate'
import Divider from '../../Divider'
import Modal from '../../Modal'

// REDUX ACTIONS
import { loginUser } from '../../../redux/actions/userActions'
import { hideModal } from '../../../redux/actions/modalActions'

////////////////////////
// STYLED COMPONENTS //
//////////////////////

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: var(--spacing-m);
  }
`

const Title = styled.h2`
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.8rem;
`
const inputStyle = {
  fontSize: '1rem',
  padding: '0.5rem'
}

const buttonStyle = {
  bgColor: `var(--color-primary)`,
  padding: '0.5rem',
  fontSize: '1rem',
  width: '100%'
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

const Actions = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
`

/////////////////////////////////
///// REACT ////////////////////
////////////////////////////////

const LoginModal = props => {
  const dispatch = useDispatch()

  /**** FORM */
  // INITIAL FORM STATE
  const initialValues = {
    email: '',
    password: ''
  }

  // FORM LOGIC ON SUBMIT
  const loginFormLogic = values => dispatch(loginUser(values))

  // USEFORM HOOK
  const {
    handleFormSubmit,
    handleFormChange,
    values,
    errors,
    handleBlur,
    isSubmitting
  } = useForm(initialValues, loginFormLogic, loginFormValidate)
  /**** END FORM */

  return (
    <Modal type={props.style}>
      {/* MAIN LOGIN FORM */}
      <Form onSubmit={handleFormSubmit}>
        {props.style === 'loginModal' && (
          <Title>Log in to your account first</Title>
        )}
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          {...inputStyle}
          value={values.email}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors && errors.email}
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Password"
          {...inputStyle}
          value={values.password}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors && errors.password}
        />
        <CustomButton type="submit" {...buttonStyle}>
          Login
        </CustomButton>
      </Form>

      {/* RESET PASSWORD LINK */}
      <ForgotPassword>
        <Link to="/">I forgot my password</Link>
      </ForgotPassword>

      <Divider />

      {/* LOGIN WITH GOOGLE */}
      <Actions>
        <LoginWithGoogleButton>Login with Google</LoginWithGoogleButton>
        <LoginWithFacebookButton>Login with Facebook</LoginWithFacebookButton>
        <Link to="/register">
          <CustomButton
            type="button"
            {...registerButtonStyle}
            onClick={() => dispatch(hideModal())}
          >
            Create an account
          </CustomButton>
        </Link>
      </Actions>
    </Modal>
  )
}

export default LoginModal
