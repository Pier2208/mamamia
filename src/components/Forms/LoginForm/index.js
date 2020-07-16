import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../redux/actions/userActions'

import Form from '../../ui/Forms/Form'
import FormInput from '../../ui/Forms/FormInput'
import CustomButton from '../../ui/Buttons/CustomButton'
import Card from '../../ui/Cards/Card'
import CardHeader from '../../ui/Cards/CardHeader'
import CardContent from '../../ui/Cards/CardContent'
import CardFooter from '../../ui/Cards/CardFooter'
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
        <CardHeader>Welcome Back,</CardHeader>
        <CardContent>
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
        </CardContent>
        <CardFooter>
          <FacebookLoginButton />
          <GoogleLoginButton />
        </CardFooter>
      </Card>
      {isSubmitting && <Spinner />}
    </>
  )
}

export default LoginForm
