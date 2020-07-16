import React from 'react'
import styled from 'styled-components'

const BaseCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  width: 100%;
  padding: 1.5rem;
`

const CardContent = ({ children }) => (
  <BaseCardContent>{children}</BaseCardContent>
)

export default CardContent
