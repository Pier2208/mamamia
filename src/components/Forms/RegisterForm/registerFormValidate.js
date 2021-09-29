const registerFormValidate = values => {
    let errors = {}
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email is invalid'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    }
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
  
  export default registerFormValidate
  