import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { hideModal } from '../redux/actions/modalActions'

const useForm = (initialValues, formLogic, validate) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  const [touched, setTouched] = useState([])

  const dispatch = useDispatch()

  // run only if the form is submitted
  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        formLogic(values)
          .then(() => {
            resetForm()
            dispatch(hideModal())
          })
          .catch(error => {
            setErrors({ ...error })
            setSubmitting(false)
          })
      }
    } else {
      setSubmitting(false)
    }
  }, [isSubmitting, errors])

  useEffect(() => {
    const validationErrors = validate(values)
    const touchedErrors = Object.keys(validationErrors)
      .filter(key => touched.includes(key))
      .reduce((acc, key) => {
        if (!acc[key]) {
          acc[key] = validationErrors[key]
        }
        return acc
      }, {})
    setErrors(touchedErrors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touched, values])

  const handleFormChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  const handleBlur = event => {
    if (!touched.includes(event.target.name)) {
      setTouched([...touched, event.target.name])
    }
  }

  const resetForm = () => {
    setTouched([])
    setSubmitting(false)
    setErrors({})
    setValues(initialValues)
  }

  return {
    handleFormChange,
    handleFormSubmit,
    values,
    errors,
    handleBlur,
    isSubmitting,
  }
}

export default useForm
