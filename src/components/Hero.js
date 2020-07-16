import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled, { css } from 'styled-components'

const HeroImage = styled(BackgroundImage)`
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  ${({ format }) =>
    format === 'full' &&
    css`
      background-attachment: fixed;
    `}

  grid-column: ${({ format }) => {
    if (format === 'half-left') {
      return 'full-start / col-end 4'
    }
    if (format === 'half-right') {
      return 'col-end 4 / full-start'
    }
    if (format === 'full') {
      return 'full-start / full-end'
    }
  }};
`

const Hero = ({ children, tag, img, format }) => {
  return (
    <HeroImage Tag={tag} fluid={img} format={format}>
      {children}
    </HeroImage>
  )
}

export default Hero
