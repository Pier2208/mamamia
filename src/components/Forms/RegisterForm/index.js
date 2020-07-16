import React from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/actions/userActions'

import Form from '../../ui/Forms/Form'
import FormInput from '../../ui/Forms/FormInput'
import CustomButton from '../../ui/Buttons/CustomButton'
import Card from '../../ui/Cards/Card'
import CardHeader from '../../ui/Cards/CardHeader'
import CardContent from '../../ui/Cards/CardContent'
import CardFooter from '../../ui/Cards/CardFooter'
import Spinner from '../../ui/Spinner/Square'
import useForm from '../../../hooks/useForm'
import registerFormValidate from './registerFormValidate'
import FacebookLoginButton from '../../ui/Buttons/FacebookLoginButton'
import GoogleLoginButton from '../../ui/Buttons/GoogleLoginButton'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const registerFormLogic = values => dispatch(registerUser(values))

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const {
    handleFormSubmit,
    handleFormChange,
    values,
    errors,
    handleBlur,
    isSubmitting,
  } = useForm(initialValues, registerFormLogic, registerFormValidate)

  return (
    <>
      <Card maxWidth="500px">
        <CardHeader>Create an account</CardHeader>
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
            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={values.confirmPassword}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors && errors.confirmPassword}
            />
            <CustomButton type="submit" disabled={isSubmitting}>
              Create
            </CustomButton>
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

export default RegisterForm
