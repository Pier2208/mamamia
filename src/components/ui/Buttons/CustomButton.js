import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: ${props => (props.round ? '50%' : '5px')};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${props => (props.active ? '#F9B100' : 'grey')};
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  width: ${props => (props.round ? '6rem' : '70%')};
  height: ${props => (props.round ? '6rem' : '50px')};
  text-transform: ${props => props.uppercase && 'uppercase'};
  font-weight: bold;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #d3d3d3;
      color: #f2f2f2;
      cursor: not-allowed;
      box-shadow: none;
    `}
`

const CustomButton = ({
  disabled,
  children,
  type,
  round,
  uppercase,
  active,
}) => (
  <Button
    disabled={disabled}
    type={type}
    round={round}
    uppercase={uppercase}
    active={active}
  >
    {children}
  </Button>
)

export default CustomButton
