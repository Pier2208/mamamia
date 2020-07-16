import React from 'react'
import styled from 'styled-components'

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : '80%')};
  max-width: ${props => props.maxWidth && props.maxWidth};
  height: ${props => (props.height ? props.height : 'fit-content')};
  box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: ${props => (props.rounded ? '30px' : '0px')};
`

const Card = ({ children, width, maxWidth, height, rounded }) => (
  <BaseCard width={width} height={height} rounded={rounded} maxWidth={maxWidth}>
    {children}
  </BaseCard>
)

export default Card
