import React from 'react'
import styled from 'styled-components'

export const SizeSelector = styled.div`
  display: flex;
  border: 1px solid black;
  margin-left: 2rem;
`

const ChooseSizeBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: ${props => props.active && 'darkcyan'};
  color: ${props => props.active && 'white'};
  &:not(:last-of-type) {
    border-right: 1px solid black;
  }
`

export const Selection = ({ active, children, onClick }) => (
  <ChooseSizeBox active={active} onClick={onClick}>
    {children}
  </ChooseSizeBox>
)
