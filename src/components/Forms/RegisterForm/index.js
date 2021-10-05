import React from 'react'
import { useDispatch } from 'react-redux'
// COMPONENTS
import { Form, Input } from '../FormUI'
import { CustomButton } from '../../Buttons/CustomButtons'
// HOOKS
import useForm from '../../../hooks/useForm'
// FORM VALIDATION
import registerFormValidate from './registerFormValidate'
// REDUX ACTIONS
import { registerUser } from '../../../redux/actions/userActions'

const inputStyle = {
  fontSize: '1rem',
  padding: '0.5rem'
}

const registerButtonStyle = {
  ...inputStyle,
  bgColor: `var(--color-secondary)`,
  width: '100%'
}

const RegisterForm = () => {
  const dispatch = useDispatch()
  // FORM LOGIC ON SUBMIT
  const registerFormLogic = values => dispatch(registerUser(values))

  // INITIAL FORM STATE
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  // USEFORM HOOK
  const {
    handleFormSubmit,
    handleFormChange,
    values,
    errors,
    handleBlur,
    isSubmitting
  } = useForm(initialValues, registerFormLogic, registerFormValidate)

  return (
    <Form onSubmit={handleFormSubmit}>
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
        info="Passwords must be at least 8 characters long including uppercase,
        lowercase and a number"
      />

      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        {...inputStyle}
        value={values.confirmPassword}
        onChange={handleFormChange}
        onBlur={handleBlur}
        error={errors && errors.confirmPassword}
      />
      <CustomButton {...registerButtonStyle} disabled={isSubmitting}>
        Sign Up
      </CustomButton>
    </Form>
  )
}

export default RegisterForm
