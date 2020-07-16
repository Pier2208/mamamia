import React from 'react'
import styled from 'styled-components'

import Label from './Label'
import ErrorMessage from './ErrorMessage'

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 2rem auto;
`

const Input = styled.input`
  width: 100%;
  padding: 0rem 1rem 0.2rem 1rem;
  font-size: 1.1rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
  outline: none;
  border-radius: 0;
  color: ${(props) => props.theme.colors.darkText};
  letter-spacing: 0.2rem;
  position: relative;

  &:focus ~ ${Label} {
    left: -4px;
    top: -15px;
    color: #b5b5b5;
    font-size: 0.8rem;
  }
`

const FormInput = ({ type, name, value, onChange, onBlur, error, label }) => (
    <InputContainer>
        <Input type={type} name={name} onChange={onChange} onBlur={onBlur} />
        {label && <Label shrink={value.length}>{label}</Label>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>

)

export default FormInput
