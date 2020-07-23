import React from 'react'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../../../redux/actions/userActions'

import Form from '../../ui/Forms/Form'
import FormInput from '../../ui/Forms/FormInput'
import CustomButton from '../../ui/Buttons/CustomButton'
import Card from '../../ui/Card'
import Small from '../../ui/Typography/Small'
import MutedLink from '../../ui/Links/MutedLink'
import Spinner from '../../ui/Spinner/Square'
import useForm from '../../../hooks/useForm'
import forgotPasswordFormValidate from './forgotPasswordFormValidate'


const ForgotPasswordForm = () => {
  const dispatch = useDispatch()

  const forgotPasswordFormLogic = values => dispatch(forgotPassword(values))

  const initialValues = {
    email: '',
  }

  const {
    handleFormSubmit,
    handleFormChange,
    values,
    errors,
    handleBlur,
    isSubmitting,
  } = useForm(
    initialValues,
    forgotPasswordFormLogic,
    forgotPasswordFormValidate
  )

  return (
    <>
      <Card maxWidth="500px">
        <Card.Header>I Forgot My Password</Card.Header>
        <Small>
          Enter your email, we will send you an email to reset your password.
        </Small>
        <Card.Body>
          <Form onSubmit={handleFormSubmit} noValidate>
            <FormInput
              type="email"
              name="email"
              label="My Email"
              value={values.email}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors && errors.email}
            />
            <CustomButton type="submit" disabled={isSubmitting}>
              Reset My Password
            </CustomButton>
            <MutedLink to="/login ">Back To Login</MutedLink>
          </Form>
        </Card.Body>
      </Card>
      {isSubmitting && <Spinner />}
    </>
  )
}

export default ForgotPasswordForm
