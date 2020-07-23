import React from 'react'
import styled from 'styled-components'
import Hero from '../Hero'

const StyledSlide = styled.div`
  width: ${props => props.width}px;
  height: 100%;
`

const Slide = ({ image, width }) => {
  return (
    <StyledSlide width={width}>
      <Hero img={image.node.childImageSharp.fluid} />
    </StyledSlide>
  )
}

export default Slide
