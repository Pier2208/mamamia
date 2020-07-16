import React from 'react'
import styled from 'styled-components'

const BaseCardHeader = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem 0.5rem;
  background-color: ${props => props.theme.colors.primaryColor};
  & h2 {
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
  }
`

const CardHeader = ({ children }) => (
  <BaseCardHeader>
    <h2>{children}</h2>
  </BaseCardHeader>
)

export default CardHeader
