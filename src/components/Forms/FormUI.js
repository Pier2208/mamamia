import React from 'react'
import styled, { css } from 'styled-components'

// FORM
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
`

// LABEL
const Label = styled.label`
  font-size: 1rem;
  font-family: var(--font-form);
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 7px;
  color: var(--color-grey-dark);
  transition: 200ms ease all;
  ${({ shrink }) =>
    shrink &&
    css`
      left: -4px;
      top: -20px;
      color: var(--color-grey-medium);
      font-size: 0.8rem;
    `}
`

// FORM GROUP
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  &:not(:first-child) {
    margin-top: var(--spacing-m);
  }
`
// INPUT ERROR
export const ErrorMessage = styled.span`
  width: fit-content;
  font-size: 0.8rem;
  color: var(--color-primary);
  margin-top: 0.3rem;
  font-family: var(--font-form);
  /* position: absolute;
  bottom: -20px;
  left: 5px; */
`

// INPUT FIELD
const StyledInput = styled.input`
  background-color: var(--color-grey-light);
  color: var(--color-grey-dark);
  font-size: ${props => props.fontSize || '0.7rem'};
  font-family: var(--font-form);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: ${props => props.padding};

  &:focus ~ ${Label} {
    left: -4px;
    top: -15px;
    color: #b5b5b5;
    font-size: 0.8rem;
  }
`

export const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  label,
  info,
  ...rest
}) => (
  <FormGroup>
    <StyledInput
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
    {label && <Label shrink={value.length}>{label}</Label>}
    {info && <small>{info}</small>}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </FormGroup>
)
