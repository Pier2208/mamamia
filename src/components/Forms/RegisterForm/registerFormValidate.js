// regex: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

const registerFormValidate = values => {
    let errors = {}
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email is invalid'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    }
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.email)) {
      errors.password = 'Password does not meet the minimum requirement'
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
  