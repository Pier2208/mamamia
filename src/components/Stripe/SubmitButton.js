import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  display: block;
  font-size: 1.5rem;
  width: calc(100% - 30px);
  margin: 40px 15px 0;
  background-color: var(--color-secondary);
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  will-change: transform, background-color, box-shadow;
  padding: var(--spacing-s);


  &:active {
    background-color: #d782d9;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #e298d8;
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    background-color: #7795f8;
    box-shadow: none;
  }
  ${props =>
    props.error &&
    css`
      transform: translateY(15px);
    `}
`

const SubmitButton = ({ processing, error, children, disabled }) => (
  <Button type="submit" disabled={processing || disabled} error={error}>
    {processing ? 'Processing...' : children}
  </Button>
)

export default SubmitButton
