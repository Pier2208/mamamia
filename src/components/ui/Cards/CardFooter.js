import React from 'react'
import styled from 'styled-components'

const BaseCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  border-top: 3px solid ${props => props.theme.colors.offWhite};
`

const CardFooter = ({ children }) => <BaseCardFooter>{children}</BaseCardFooter>

export default CardFooter
