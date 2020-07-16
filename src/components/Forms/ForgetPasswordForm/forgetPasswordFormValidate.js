const loginFormValidate = values => {
    let errors = {}
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email is invalid'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    }
  
    return errors
  }
  
  export default loginFormValidate
  