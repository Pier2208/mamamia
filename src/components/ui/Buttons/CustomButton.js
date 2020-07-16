import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
  background-color: ${(props) => props.theme.colors.secondaryColor};
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;
  width: 70%;
  height: 50px;

  ${({ disabled }) =>
        disabled &&
        css`
      background-color: #d3d3d3;
      color: #f2f2f2;
      cursor: not-allowed;
      box-shadow: none;
    `}
`

const CustomButton = ({ disabled, children, type }) => (
    <Button disabled={disabled} type={type}>
        {children}
    </Button>
)

export default CustomButton