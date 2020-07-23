import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../redux/actions/userActions'

import Form from '../../ui/Forms/Form'
import FormInput from '../../ui/Forms/FormInput'
import CustomButton from '../../ui/Buttons/CustomButton'
import Card from '../../ui/Card'
import MutedLink from '../../ui/Links/MutedLink'
import Spinner from '../../ui/Spinner/Square'
import useForm from '../../../hooks/useForm'
import loginFormValidate from './loginFormValidate'
import FacebookLoginButton from '../../ui/Buttons/FacebookLoginButton'
import GoogleLoginButton from '../../ui/Buttons/GoogleLoginButton'

const LoginForm = () => {
  const dispatch = useDispatch()

  const loginFormLogic = values => dispatch(loginUser(values))

  const initialValues = {
    email: '',
    password: '',
  }

  const {
    handleFormSubmit,
    handleFormChange,
    values,
    errors,
    handleBlur,
    isSubmitting,
  } = useForm(initialValues, loginFormLogic, loginFormValidate)

  return (
    <>
      <Card maxWidth="500px">
        <Card.Header>Welcome Back,</Card.Header>
        <Card.Body>
          <Form onSubmit={handleFormSubmit} noValidate>
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors && errors.email}
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
              value={values.password}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors && errors.password}
            />
            <CustomButton type="submit" disabled={isSubmitting}>
              Log Me In
            </CustomButton>
            <MutedLink to="/forgot-password">Forgot your password?</MutedLink>
          </Form>
        </Card.Body>
        <Card.Footer>
          <FacebookLoginButton />
          <GoogleLoginButton />
        </Card.Footer>
      </Card>
      {isSubmitting && <Spinner />}
    </>
  )
}

export default LoginForm
