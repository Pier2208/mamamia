import React from 'react'
import { useDispatch } from 'react-redux'

import Form from '../../ui/Forms/Form'
import FormInput from '../../ui/Forms/FormInput'
import CustomButton from '../../ui/Buttons/CustomButton'
import Card from '../../ui/Card'
import Spinner from '../../ui/Spinner/Square'
import useForm from '../../../hooks/useForm'
import resetPasswordFormValidate from './resetPasswordFormValidate'

const ResetPasswordForm = () => {
  const dispatch = useDispatch()

  const resetPasswordFormLogic = values => console.log(values)

  const initialValues = {
    password: '',
    confirmPassword: ''
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
    resetPasswordFormLogic,
    resetPasswordFormValidate
  )

  return (
    <>
      <Card maxWidth="500px">
        <Card.Header>Enter your new password</Card.Header>
        <Card.Body>
          <Form onSubmit={handleFormSubmit} noValidate>
            <FormInput
              type="password"
              name="password"
              label="New Password"
              value={values.password}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors && errors.password}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirm New Password"
              value={values.confirmPassword}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={errors && errors.confirmPassword}
            />
            <CustomButton type="submit" disabled={isSubmitting}>
              Confirm
            </CustomButton>
          </Form>
        </Card.Body>
      </Card>
      {isSubmitting && <Spinner />}
    </>
  )
}

export default ResetPasswordForm