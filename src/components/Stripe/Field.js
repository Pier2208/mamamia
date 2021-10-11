import React from 'react'
import { FormRow , Label, Input } from './uiComponents'

// normal form field
const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange
}) => (
  <FormRow>
    <Label>{label}</Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </FormRow>
)

export default Field
