import React from 'react'
import { Container, Header, Body, Footer } from './styles'
import PropTypes from 'prop-types'

const Card = ({ children, width, maxWidth, height, rounded }) => (
  <Container
    width={width}
    height={height}
    rounded={rounded}
    maxWidth={maxWidth}
  >
    {children}
  </Container>
)

Card.Header = ({ children }) => (
  <Header>
    <h2>{children}</h2>
  </Header>
)
Card.Body = ({ children }) => <Body>{children}</Body>
Card.Footer = ({ children }) => <Footer>{children}</Footer>

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.bool
}

export default Card
