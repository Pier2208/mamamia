const resetPasswordFormValidate = values => {
    let errors = {}
  
    if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match'
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'You must confirm your password'
    }
  
    return errors
  }
  
  export default resetPasswordFormValidate
  