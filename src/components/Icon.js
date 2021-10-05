// https://stackblitz.com/edit/react-6cr17y?file=index.js
// svg spritesheet must be in a static folder at root level

import React from 'react'
import styled from 'styled-components'
import sprites from '/static/icons/sprites.svg' // load the spritesheet

const Icon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <use xlinkHref={`${sprites}#${props.name}`} />
  </Svg>
)

const Svg = styled.svg`
  width: ${props => props.width || '35px'};
  height: ${props => props.height || '35px'};
  fill: ${props => props.fill || 'var(--color-grey-dark)'};
  stroke: ${props => props.stroke || 'var(--color-grey-dark)'}
`

export default Icon